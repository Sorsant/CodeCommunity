from django.db import models
from .post import Post
from .user import User

# Create your models here.
class Likes(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
    return f"Likes object (user: {self.user})"