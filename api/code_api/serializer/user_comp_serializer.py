from rest_framework import serializers
from ..models.user_comp import UserComplement

class UserComplementSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserComplement
    fields = '__all__'