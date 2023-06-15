from rest_framework import viewsets
from ..serializer.post_serializer import PostSerializer
from ..models.post import Post

# Create your views here.
  
class PostView(viewsets.ModelViewSet):
  serializer_class = PostSerializer
  queryset = Post.objects.all()
