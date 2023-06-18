from rest_framework import serializers
from ..models.community import Community

class CommunitySerializer(serializers.ModelSerializer):
  class Meta:
    model = Community
    fields = '__all__'