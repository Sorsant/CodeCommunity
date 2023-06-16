# Filters

from django_filters.rest_framework import DjangoFilterBackend
from ..serializer.user_serializer import UserSerializer
from ..models.user import User

# *from rest_framework import filters

class UserWithFilters(generics.ListAPIView):
    
    queryset = User.objects.all().select_related('lastname')
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'nickname']
