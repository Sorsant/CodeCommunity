from rest_framework import viewsets
from ..serializer.likes_serializer import LikesSerializer
from ..models.likes import Likes

# Create your views here.
  
class LikesView(viewsets.ModelViewSet):
  serializer_class = LikesSerializer
  queryset = Likes.objects.all()
