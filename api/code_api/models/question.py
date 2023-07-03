from django.db import models
from django.utils import timezone
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

#Create your models here.
class Question(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField(max_length=2000)
  image = models.CharField(max_length=255, blank=True)
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
  created = models.DateTimeField(default=timezone.now, editable=False)
  is_delete = models.BooleanField(default=False)
    
  @property
  def is_user_account_deleted(self):
    return self.user.is_delete
  
  def __str__(self):
    return self.title
  
@receiver(post_save, sender=UserAccount)
def update_post_on_user_account_save(sender, instance, **kwargs):
    Question.objects.filter(user=instance).update(is_delete=instance.is_delete)