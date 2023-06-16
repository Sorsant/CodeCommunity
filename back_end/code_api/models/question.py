from django.db import models
from .user import User

#Create your models here.
class Question(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField(max_length=2000)
  user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  created = models.DateTimeField(auto_now_add=True, editable=False)
  
  def __str__(self):
    return self.title