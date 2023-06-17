from rest_framework import viewsets, filters
from rest_framework.generics import ListAPIView
from ..serializer.news_serializer import NewsSerializer
from ..models.news import News

class NewsView(viewsets.ModelViewSet, ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields= ['title', 'created', 'author']
    ordering_fields= ['title', 'created', 'author']
    

