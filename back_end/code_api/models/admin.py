from django.db import models

class Admin(models.Model):
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=128)
    email = models.EmailField()

    def __str__(self):
        return self.name
