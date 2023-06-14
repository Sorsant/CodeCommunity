from django.db import models
from .question import Question

# Create your models here.
class Answer(models.Model):
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  description = models.TextField()
  
  def __str__(self):
    return self.description