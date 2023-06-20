from rest_framework import viewsets, filters
from rest_framework.generics import ListAPIView
from ..serializer.news_serializer import NewsSerializer
from ..models.news import News

class NewsView(viewsets.ModelViewSet, ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields= ['title', 'description', 'author', 'category', 'created']
    ordering_fields= ['title', 'description', 'author', 'category', 'created']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        title = self.request.query_params.get('title', None)
        description = self.request.query_params.get('description', None)
        author = self.request.query_params.get('author', None)
        category = self.request.query_params.get('category', None)
        
        if title:
            queryset = queryset.filter(title__contains=title)
            
        if description:
            queryset = queryset.filter(description__contains=description)
            
        if author:
            queryset = queryset.filter(author__contains=author)
            
        if category:
            queryset = queryset.filter(category__contains=category)
            
        return queryset