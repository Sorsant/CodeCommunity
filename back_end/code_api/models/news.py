from django.db import models
from .category import Category

# Create your models here.
class News(models.Model):    
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=5000)
    author = models.CharField(max_length=255)
    category = models.ManyToManyField(Category)
    link = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.title