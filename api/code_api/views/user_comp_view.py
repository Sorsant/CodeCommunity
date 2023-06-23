from rest_framework import filters, viewsets
from rest_framework.views import APIView
from ..serializer.user_comp_serializer import UserComplementSerializer
from ..models.user_comp import UserComplement

class UserComplementView(viewsets.ModelViewSet, APIView):
  serializer_class = UserComplementSerializer
  queryset = UserComplement.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['user__name', 'language__name', 'community__name', 'created']
  ordering_fields = ['user__name', 'language__name', 'community__name','created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    name = self.request.query_params.get('name', None)
    language = self.request.query_params.get('language', None)
    community = self.request.query_params.get('community', None)
    
    if name:
      queryset = queryset.filter(user__name__contains=name)
      
    if language:
      queryset = queryset.filter(language__name__contains=language)
      
    if community:
      queryset = queryset.filter(community__name__contains=community)
      
    return queryset