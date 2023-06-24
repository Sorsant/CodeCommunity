from rest_framework import viewsets, filters
from rest_framework.generics import ListAPIView
from ..serializer.post_serializer import PostSerializer
from ..models.post import Post

# Create your views here.
class PostView(viewsets.ModelViewSet):
  serializer_class = PostSerializer
  queryset = Post.objects.all()

  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['title', 'description', 'user__name', 'created']
  ordering_fields = ['title', 'description', 'user__name', 'created']
