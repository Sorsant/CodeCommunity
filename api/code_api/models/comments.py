from django.db import models
from django.utils import timezone
from .post import Post
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Comments(models.Model):
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  description = models.TextField(max_length=5000)
  created = models.DateTimeField(default=timezone.now, editable=False)
  modified = models.DateTimeField(auto_now=True, editable=False)
  is_delete = models.BooleanField(default=False)
    
  @property
  def is_user_account_deleted(self):
    return self.user.is_delete
    
  def save(self, *args, **kwargs):
      self.modified = timezone.now()
      super().save(*args, **kwargs)
  
  def __str__(self):
    return self.user.email

@receiver(post_save, sender=UserAccount)
def update_comments_on_user_account_save(sender, instance, **kwargs):
    Comments.objects.filter(user=instance).update(is_delete=instance.is_delete)