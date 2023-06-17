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