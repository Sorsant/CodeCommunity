import requests
from django.contrib import messages
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status, viewsets, filters
from .serializers import UserCreateSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication

from django.http import HttpResponseBadRequest
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode

from .models import UserAccount

User = get_user_model()

class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = UserAccount.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['first_name', 'last_name']
  ordering_fields = ['first_name', 'last_name']

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
  authentication_classes = [TokenAuthentication]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)


def activate_account(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)

        if default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()

            return render(request, 'activation_user_success.html')
        else:
            return HttpResponseBadRequest('El token de activación no es válido.')
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        return HttpResponseBadRequest('El enlace de activación no es válido.')
      
def reset_password_confirm(request, uidb64, token):
    if request.method == 'POST':
        new_password = request.POST.get('new_password')
        re_new_password = request.POST.get('re_new_password')

        if new_password != re_new_password:
            messages.error(request, 'Las contraseñas no coinciden.')
            return redirect('reset_password_confirm', uidb64=uidb64, token=token)

        data = {
            'new_password': new_password,
            're_new_password': re_new_password,
            'uid': uidb64,
            'token': token
        }

        # Imprime el contenido de la solicitud POST
        print(data)

        # Envía la solicitud para restablecer la contraseña a la API de Djoser
        response = requests.post('http://localhost:8000/auth/users/reset_password_confirm/', json=data)

        if response.status_code == 204:
            messages.success(request, '¡Contraseña restablecida con éxito!')
            return redirect('http://localhost:3000/login')
        else:
            messages.error(request, 'Error al restablecer la contraseña.')

    return render(request, 'reset_password_confirm.html', {'uid': uidb64, 'token': token})