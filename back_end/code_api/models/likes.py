from django.db import models
from .post import Post
from .user import User

# Create your models here.
class Likes(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  post = models.ForeignKey(Post, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  created = models.DateTimeField(auto_now_add=True, editable=False)
  
  def __str__(self):
    return f"Comment on post: {self.post.title} (user: {self.user})"