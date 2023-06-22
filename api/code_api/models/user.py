from django.db import models
from django.utils import timezone
from .language import Language
from .community import Community
#from cloudinary_storage.storage import MediaCloudinaryStorage
from cloudinary.models import CloudinaryField

class User(models.Model):
    name = models.CharField(max_length=255)
    #user_image = models.CharField(max_length=255, blank=True)
    #user_image = models.ImageField(upload_to='images/', blanck=True)
    user_image = CloudinaryField('image')
    password = models.CharField(max_length=255)
    nickname = models.CharField(max_length=255, unique=True)
    lastname = models.CharField(max_length=255)
    
    birthday = models.DateField(blank=True)
    postulation = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    
    language = models.ManyToManyField(Language, blank=True)
    community = models.ManyToManyField(Community, blank=True)
    premium = models.BooleanField(default=False)
    
    created = models.DateTimeField(default=timezone.now, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    
    def save(self, *args, **kwargs):
      self.modified = timezone.now()
      super().save(*args, **kwargs)

    def __str__(self):
        return self.name
