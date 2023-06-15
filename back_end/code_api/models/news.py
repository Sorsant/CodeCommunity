from django.db import models

# Create your models here.
class News(models.Model):    
    title = models.CharField()
    description = models.TextField()
    date = models.DateField()
    author = models.CharField()
    category = models.CharField()
    link = models.TextField()

    def __str__(self):
        return self.title
    
    # Preguntar por lo que se debe devolver en la linea decimotercera