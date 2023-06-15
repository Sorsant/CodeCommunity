from rest_framework import viewsets
from ..serializer.news_serializer import NewsSerializer
from ..models.news import News

# Create your views here.
  
class NewsView(viewsets.ModelViewSet):
  serializer_class = NewsSerializer
  queryset = News.objects.all()