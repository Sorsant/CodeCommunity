from django.db import models
from django.utils import timezone
from .user import User

# Create your models here.
class Post(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.TextField(max_length=255)
  description = models.TextField(max_length=3000)
  image = models.CharField(max_length=255, blank=True)
  created = models.DateTimeField(default=timezone.now, editable=False)

  def __str__(self):
    return self.title