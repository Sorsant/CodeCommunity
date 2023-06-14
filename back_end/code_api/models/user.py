from django.db import models
from .language import Language
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    
    name = models.CharField()
    password = models.CharField()
    nickname = models.CharField()
    lastname = models.CharField()
    language = models.CharField()
    birthday = models.DateField()
    postulation = models.BooleanField()
    email = models.EmailField()

    def str(self):
        return self.username