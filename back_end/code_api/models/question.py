from django.db import models
from .user import User

#Create your models here.
class Question(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
  
  def __str__(self):
    return self.title