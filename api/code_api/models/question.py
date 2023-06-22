from django.db import models
from django.utils import timezone
from .user import AppUser

#Create your models here.
class Question(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField(max_length=2000)
  image = models.CharField(max_length=255, blank=True)
  user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
  created = models.DateTimeField(default=timezone.now, editable=False)
  
  def __str__(self):
    return self.title