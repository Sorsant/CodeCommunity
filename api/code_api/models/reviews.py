from django.db import models
from users.models import UserAccount
from django.contrib.postgres.fields import ArrayField
from django.db.models.signals import post_save
from django.dispatch import receiver

class Reviews(models.Model):
  id = models.OneToOneField(UserAccount, primary_key=True, on_delete=models.CASCADE)
  review = ArrayField(models.IntegerField())
  comments = ArrayField(models.CharField(max_length=255))
  is_delete = models.BooleanField(default=False)
  
  @property
  def is_user_account_deleted(self):
      return self.user.is_delete
  
  def __str__(self):
      return self.id.first_name
    
@receiver(post_save, sender=UserAccount)
def update_post_on_user_account_save(sender, instance, **kwargs):
    Reviews.objects.filter(id=instance).update(is_delete=instance.is_delete)