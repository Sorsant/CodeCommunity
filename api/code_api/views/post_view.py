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
  ordering_fields = ['title', 'description', 'created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    title = self.request.query_params.get('title', None)
    description = self.request.query_params.get('description', None)
    user = self.request.query_params.get('user', None)
    
    if title:
      queryset = queryset.filter(title__contains=title)
      
    if description:
      queryset = queryset.filter(description__contains=description)
      
    if user:
      queryset = queryset.filter(user__name__contains=user)
      
    return queryset
