from django.db import models
from django.utils import timezone
from .language import Language
from .community import Community
from users.models import UserAccount
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserComplement(models.Model):
    id = models.OneToOneField(UserAccount, primary_key=True, on_delete=models.CASCADE)
    user_image = models.CharField(blank=True)
    birthday = models.DateField(blank=True, null=True)
    postulation = models.BooleanField(default=False)
    language = models.ManyToManyField(Language, blank=True)
    community = models.ManyToManyField(Community, blank=True)
    premium = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    is_delete = models.BooleanField(default=False)
    
    @property
    def is_user_account_deleted(self):
        return self.user.is_delete
    
    def save(self, *args, **kwargs):
        self.modified = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.id.first_name

@receiver(post_save, sender=UserAccount)
def update_post_on_user_account_save(sender, instance, **kwargs):
    UserComplement.objects.filter(id=instance).update(is_delete=instance.is_delete)