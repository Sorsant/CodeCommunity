from django.db import models
from .language import Language
from .community import Community

class User(models.Model):
    language = models.ManyToManyField(Language)
    community = models.ManyToManyField(Community, blank=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    nickname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    birthday = models.DateField()
    postulation = models.BooleanField()
    email = models.EmailField()
    premium = models.BooleanField()

    def __str__(self):
        return self.name
