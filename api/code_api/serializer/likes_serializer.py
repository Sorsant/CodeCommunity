from rest_framework import serializers
from ..models.likes import Likes

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = '__all__'