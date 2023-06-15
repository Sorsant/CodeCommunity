from django.db import models
from .post import Post
from .user import User

# Create your models here.
class Comments(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  comment = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
    return f"Comments object (user: {self.user})"
  