from django.db import models
from .user import User


# Create your models here.
class Post(models.Model):
  name = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.TextField()
  description = models.TextField()
  createdate = models.DateTimeField(auto_now_add=True)

  
  def __str__(self):
    return self.title