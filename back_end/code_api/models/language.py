from django.db import models

# Create your models here.
class Language(models.Model):    
    name = models.CharField()
    user_checkout = models.BooleanField()

    def str(self):
        return self.username