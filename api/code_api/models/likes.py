from django.db import models
from .user import User

# Create your models here.


class Likes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment on post: (user: {self.user})"
