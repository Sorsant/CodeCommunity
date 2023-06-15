from rest_framework import viewsets
from ..serializer.community_serializer import CommunitySerializer
from ..models.community import Community

# Create your views here.
  
class CommunityView(viewsets.ModelViewSet):
  serializer_class = CommunitySerializer
  queryset = Community.objects.all()