from django.db import models
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

class Reviews(models.Model):
    id = models.OneToOneField(UserAccount, primary_key=True, on_delete=models.CASCADE);
    is_delete = models.BooleanField(default=False);
  
    @property
    def is_user_account_deleted(self):
      return self.user.is_delete
  
    def __str__(self):
      return self.id
    
@receiver(post_save, sender=UserAccount)
def update_reviews_on_user_account_save(sender, instance, **kwargs):
    Reviews.objects.filter(id=instance).update(is_delete=instance.is_delete)


class Review(models.Model):
    reviews_id = models.ForeignKey(Reviews, on_delete=models.CASCADE);
    review = models.IntegerField(blank=True);
    comment = models.CharField(blank=True);
    is_delete = models.BooleanField(default=False);
  
    @property
    def is_user_account_deleted(self):
      return self.user.is_delete 

    def __str__(self):
        return self.reviews_id
    
@receiver(post_save, sender=Reviews)
def update_reviews_on_user_account_save(sender, instance, **kwargs):
    Review.objects.filter(id=instance).update(is_delete=instance.is_delete)
