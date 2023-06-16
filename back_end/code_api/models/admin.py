from django.db import models
from django.utils import timezone

class Admin(models.Model):
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=128)
    email = models.EmailField(max_length=254)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    
    def save(self, *args, **kwargs):
      self.modified = timezone.now()
      super().save(*args, **kwargs)

    def __str__(self):
        return self.name
