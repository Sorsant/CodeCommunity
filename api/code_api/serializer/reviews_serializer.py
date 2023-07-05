from rest_framework import serializers
from ..models.reviews import Reviews

class ReviewsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Reviews
    fields = '__all__'