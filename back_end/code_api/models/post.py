from django.db import models
from .user import User

# Create your models here.
class Post(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  title = models.TextField(max_length=255)
  description = models.TextField(max_length=3000)
  created = models.DateTimeField(auto_now_add=True, editable=False)

  def __str__(self):
    return self.title