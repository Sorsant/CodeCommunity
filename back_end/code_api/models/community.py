from django.db import models

# Create your models here.
class Community(models.Model):    
    name = models.CharField()

    def __str__(self):
        return self.name