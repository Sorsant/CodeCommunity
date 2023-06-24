from rest_framework import viewsets, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserCreateSerializer, UserSerializer
from .models import UserAccount


class RegisterView(APIView):
  def post(self, request):
    data = request.data

    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)
  
class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = UserAccount.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['first_name', 'last_name']
  ordering_fields = ['first_name', 'last_name']