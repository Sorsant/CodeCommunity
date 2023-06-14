from django.db import models

# Create your models here.
class Community(models.Model):    
    name = models.CharField()

    def str(self):
        return self.username