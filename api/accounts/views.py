from rest_framework import filters, viewsets
from rest_framework.views import APIView
from accounts.models import UserAccount
from accounts.serializers import UserSerializer

class UserView(viewsets.ModelViewSet, APIView):
  serializer_class = UserSerializer
  queryset = UserAccount.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['id', 'name']
  ordering_fields = ['id', 'name']