# Filters

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import generics
from rest_framework import viewsets


from ..serializer.user_serializer import UserSerializer
from ..serializer.post_serializer import PostSerializer

from ..models.user import User
from ..models.post import Post

# *from rest_framework import filters

class UserWithFilters(generics.ListAPIView):
    
    queryset = User.objects.all().select_related('lastname')
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'nickname']

# * Filter Post 

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['title']
    search_fields = ['title']

    
