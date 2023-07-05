from django.db import models
from django.utils import timezone
from ..utils import cargar_imagen
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Post(models.Model):
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user_post')
  title = models.TextField(max_length=255)
  image = models.CharField(max_length=255, blank=True)
  description = models.TextField(max_length=3000)
  likes = models.ManyToManyField(UserAccount, blank=True, related_name='liked_post')
  created = models.DateTimeField(default=timezone.now, editable=False)
  is_delete = models.BooleanField(default=False)
    
  @property
  def is_user_account_deleted(self):
    return self.user.is_delete

  def __str__(self):
    return self.title
  
  def save(self, *args, **kwargs):
        if isinstance(self.image, dict):
            self.image = cargar_imagen(self.image)
        super(Post, self).save(*args, **kwargs)
        
@receiver(post_save, sender=UserAccount)
def update_post_on_user_account_save(sender, instance, **kwargs):
    Post.objects.filter(user=instance).update(is_delete=instance.is_delete)