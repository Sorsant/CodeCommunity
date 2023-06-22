from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
from .language import Language
from .community import Community

class AppUserManager(UserManager):
  def create_user(self, email, username, password=None):
    if not email:
      raise ValueError('An email is required.')
    if not password:
      raise ValueError('A password is required.')
    email = self.normalize_email(email)
    user = self.model(email=email, username=username)
    user.set_password(password)
    user.save()
    return user
  
  def create_superuser(self, email, username, password=None):
    if not email:
      raise ValueError('An email is required.')
    if not password:
      raise ValueError('A password is required.')
    user = self.create_user(email=email, username=username, password=password)
    user.is_superuser = True
    user.is_staff = True
    user.save()
    return user
  
class AppUser(AbstractBaseUser, PermissionsMixin):
  user_id = models.AutoField(primary_key=True)
  email = models.EmailField(max_length=80, unique=True)
  username = models.CharField(max_length=60)
  is_staff = models.BooleanField(default=False)
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']
  objects = AppUserManager()
  created = models.DateTimeField(default=timezone.now, editable=False)
  modified = models.DateTimeField(auto_now=True, editable=False)
    
  def save(self, *args, **kwargs):
    self.modified = timezone.now()
    super().save(*args, **kwargs)

class UserExtras(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    user_image = models.CharField(max_length=255, blank=True)
    birthday = models.DateField(blank=True)
    postulation = models.BooleanField(default=False)
    language = models.ManyToManyField(Language, blank=True)
    community = models.ManyToManyField(Community, blank=True)
    premium = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
