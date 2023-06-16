from django.db import models
from django.utils import timezone
from .post import Post
from .user import User

# Create your models here.
class Comments(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  post = models.ForeignKey(Post, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  comment = models.TextField(max_length=5000)
  created = models.DateTimeField(auto_now_add=True, editable=False)
  modified = models.DateTimeField(auto_now=True, editable=False)
    
  def save(self, *args, **kwargs):
      self.modified = timezone.now()
      super().save(*args, **kwargs)
  
  def __str__(self):
    return f"Comment on post: {self.post.title} (user: {self.user})"