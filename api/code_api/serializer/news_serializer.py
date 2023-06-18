from rest_framework import serializers
from ..models.news import News

class NewsSerializer(serializers.ModelSerializer):
  class Meta:
    model = News
    fields = '__all__'