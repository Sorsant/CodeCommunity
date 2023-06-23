from django.contrib import admin
from accounts.models import UserAccount

# Register your models here.
@admin.register(UserAccount)
class UserAccount(admin.ModelAdmin):
    list_display = ('name', 'email', 'last_login', 'is_active', 'is_staff')