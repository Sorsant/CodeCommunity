from rest_framework import filters, permissions, status, viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model, login, logout
from ..serializer.user_serializer import UserSerializer, UserLoginSerializer, UserRegisterSerializer, UserExtrasSerializer
from ..models.user import UserExtras
from ..validations import custom_validation, validate_email, validate_password

class UserRegister(APIView):
  permission_classes = [permissions.AllowAny]
  def post(self, request):
    clean_data = custom_validation(request.data)
    serializer = UserRegisterSerializer(data=clean_data)
    if serializer.is_valid(raise_exception=True):
      user = serializer.create(clean_data)
      if user:
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
  permission_classes = [permissions.AllowAny]
  authentication_classes = [SessionAuthentication]
  ##
  def post(self, request):
    data = request.data
    assert validate_email(data)
    assert validate_password(data)
    serializer = UserLoginSerializer(data=data)
    if serializer.is_valid(raise_exception=True):
      user = serializer.check_user(data)
      login(request, user)
      return Response(serializer.data, status=status.HTTP_200_OK)

class UserLogout(APIView):
  def post(self, request):
    logout(request)
    return Response(status=status.HTTP_200_OK)

class UserView(APIView):
  permission_classes = [permissions.IsAuthenticated]
  authentication_classes = [SessionAuthentication]
  ##
  def get(self, request):
    serializer = UserSerializer(request.user)
    return Response({'user': serializer.data}, status=status.HTTP_200_OK)
  
  
class UserExtraView(viewsets.ModelViewSet, APIView):
  serializer_class = UserExtrasSerializer
  queryset = UserExtras.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['user__username', 'language__name', 'community__name', 'created']
  ordering_fields = ['user__username', 'language__name', 'community__name','created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    username = self.request.query_params.get('username', None)
    language = self.request.query_params.get('language', None)
    community = self.request.query_params.get('community', None)
    
    if username:
      queryset = queryset.filter(user__username__contains=username)
      
    if language:
      queryset = queryset.filter(language__name__contains=language)
      
    if community:
      queryset = queryset.filter(community__name__contains=community)
      
    return queryset