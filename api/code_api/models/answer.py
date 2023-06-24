from django.utils import timezone
from django.db import models
from .question import Question
from .user import AppUser

# Create your models here.
class Answer(models.Model):
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  description = models.TextField(max_length=3000)
  user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
  created = models.DateTimeField(default=timezone.now, editable=False)
  
  def __str__(self):
    return self.question.title