from rest_framework import viewsets, filters
from rest_framework.generics import ListAPIView
from ..serializer.community_serializer import CommunitySerializer
from ..models.community import Community

# Create your views here.
  
class CommunityView(viewsets.ModelViewSet, ListAPIView):
  serializer_class = CommunitySerializer
  queryset = Community.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['name', 'created', 'language__name', 'user__name']
  ordering_fields = ['name', 'created', 'language__name', 'user__name']