from django.db import models
from django.utils import timezone
from .category import Category

# Create your models here.
class News(models.Model):    
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=5000)
    image = models.CharField(max_length=255, blank=True)
    author = models.CharField(max_length=255, blank=True)
    category = models.ManyToManyField(Category)
    link = models.CharField(max_length=255, blank=True)
    created = models.DateTimeField(default=timezone.now, editable=False)
    is_delete = models.BooleanField(default=False)

    def __str__(self):
        return self.title