from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from accounts.models import UserAccount

User = get_user_model

class UserCreateSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = User
    fields = ('id', 'email', 'name', 'password')
    
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserAccount
    fields = ('id', 'email', 'name')