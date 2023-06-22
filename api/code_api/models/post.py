from django.db import models
from django.utils import timezone
from .user import AppUser

# Create your models here.
class Post(models.Model):
  user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='user_post')
  title = models.TextField(max_length=255)
  description = models.TextField(max_length=3000)
  image = models.CharField(max_length=255, blank=True)
  likes = models.ManyToManyField(AppUser, blank=True, related_name='liked_post')
  created = models.DateTimeField(default=timezone.now, editable=False)

  def __str__(self):
    return self.title