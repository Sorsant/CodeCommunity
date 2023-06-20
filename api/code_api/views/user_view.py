from rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from ..serializer.user_serializer import UserSerializer
from ..models.user import User

# Create your views here.
  
class UserView(viewsets.ModelViewSet, ListAPIView):
  serializer_class = UserSerializer
  queryset = User.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['name', 'nickname', 'language__name', 'community__name', 'created']
  ordering_fields = ['name', 'nickname', 'language__name', 'community__name','created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    name = self.request.query_params.get('name', None)
    nickname = self.request.query_params.get('nickname', None)
    language = self.request.query_params.get('language', None)
    community = self.request.query_params.get('community', None)
    
    if name:
      queryset = queryset.filter(name__contains=name)
      
    if nickname:
      queryset = queryset.filter(nickname__contains=nickname)
      
    if language:
      queryset = queryset.filter(language__name__contains=language)
      
    if community:
      queryset = queryset.filter(community__name__contains=community)
      
    return queryset