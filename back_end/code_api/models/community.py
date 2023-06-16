from .language import Language
from django.db import models

# Create your models here.
class Community(models.Model):    
    language = models.ManyToManyField(Language)
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return self.name