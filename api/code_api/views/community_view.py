from rest_framework import viewsets, filters
from rest_framework.generics import ListAPIView
from ..serializer.community_serializer import CommunitySerializer
from ..models.community import Community

# Create your views here.
  
class CommunityView(viewsets.ModelViewSet, ListAPIView):
  serializer_class = CommunitySerializer
  queryset = Community.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['name', 'description', 'language__name', 'created']
  ordering_fields = ['name', 'description', 'language__name', 'created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    name = self.request.query_params.get('name', None)
    description = self.request.query_params.get('description', None)
    language = self.request.query_params.get('language', None)
    
    if name:
      queryset = queryset.filter(name__contains=name)
    
    if description:
      queryset = queryset.filter(description__contains=description)
      
    if language:
      queryset = queryset.filter(language__name__contains=language)
      
    return queryset