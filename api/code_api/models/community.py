from django.utils import timezone
from .language import Language
from django.db import models

# Create your models here.
class Community(models.Model):    
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(max_length=2000)
    image = models.CharField(max_length=255)
    language = models.ManyToManyField(Language)
    created = models.DateTimeField(default=timezone.now, editable=False)
    is_delete = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name