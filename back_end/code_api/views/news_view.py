from rest_framework import viewsets
from ..serializer.news_serializer import NewsSerializer
from ..models.news import News

class NewsView(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    queryset = News.objects.all()

    class Meta:
        ordering = ['-fecha']
