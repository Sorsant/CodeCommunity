from .language import Language
from django.db import models

# Create your models here.
class Community(models.Model):    
    language = models.ManyToManyField(Language)
    
    name = models.CharField()
    description = models.TextField()
    users = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name