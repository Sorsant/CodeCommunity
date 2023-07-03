from django.db import models
from django.utils import timezone
from .post import Post
from users.models import UserAccount

# Create your models here.
class Comments(models.Model):
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  description = models.TextField(max_length=5000)
  created = models.DateTimeField(default=timezone.now, editable=False)
  modified = models.DateTimeField(auto_now=True, editable=False)
    
  def save(self, *args, **kwargs):
      self.modified = timezone.now()
      super().save(*args, **kwargs)
  
  def __str__(self):
    return self.user.email