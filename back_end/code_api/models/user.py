from django.db import models
from .language import Language
from .community import Community


# Create your models here.

class User(models.Model):
    language = models.ManyToManyField(Language)
    community = models.ManyToManyField(Community)
    
    name = models.CharField()
    password = models.CharField()
    nickname = models.CharField()
    lastname = models.CharField()
    language = models.CharField()
    birthday = models.DateField()
    postulation = models.BooleanField()
    email = models.EmailField()

    def __str__(self):
        return self.nickname