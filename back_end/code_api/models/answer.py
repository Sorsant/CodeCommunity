from django.db import models
from .question import Question
from .user import User

# Create your models here.
class Answer(models.Model):
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  description = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.description