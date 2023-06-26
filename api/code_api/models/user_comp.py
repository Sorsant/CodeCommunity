from django.db import models
from django.utils import timezone
from .language import Language
from .community import Community
# from cloudinary.models import CloudinaryField
from users.models import UserAccount

class UserComplement(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    user_image = models.CharField(blank=True)
    birthday = models.DateField(blank=True)
    postulation = models.BooleanField(default=False)
    language = models.ManyToManyField(Language, blank=True)
    community = models.ManyToManyField(Community, blank=True)
    premium = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    
    def save(self, *args, **kwargs):
        self.modified = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.first_name


# user_image = CloudinaryField('image', folder="ImagePost")