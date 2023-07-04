from django.utils import timezone
from django.db import models
from .question import Question
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Answer(models.Model):
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  description = models.TextField(max_length=3000)
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
  created = models.DateTimeField(default=timezone.now, editable=False)
  is_delete = models.BooleanField(default=False)
  
  @property
  def is_user_account_deleted(self):
    return self.user.is_delete
  
  def __str__(self):
    return self.question.title

@receiver(post_save, sender=UserAccount)
def update_answer_on_user_account_save(sender, instance, **kwargs):
    Answer.objects.filter(user=instance).update(is_delete=instance.is_delete)