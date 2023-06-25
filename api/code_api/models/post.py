from django.db import models
from django.utils import timezone
from .user import AppUser
from cloudinary.models import CloudinaryField
from ..utils import cargar_imagen
from users.models import UserAccount

# Create your models here.
class Post(models.Model):
  user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user_post')
  title = models.TextField(max_length=255)
  description = models.TextField(max_length=3000)
  image = CloudinaryField('image', folder="ImagePost")
  likes = models.ManyToManyField(AppUser, blank=True, related_name='liked_post')
  created = models.DateTimeField(default=timezone.now, editable=False)

  def __str__(self):
    return self.title
  
  def save(self, *args, **kwargs):
        # Cargar la imagen de perfil al guardar el objeto UserProfile
        if isinstance(self.image, dict):
            self.image = cargar_imagen(self.image)
        super(Post, self).save(*args, **kwargs)