from django.contrib import admin
from django.urls import path, include
from users.views import activate_account, reset_password_confirm

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('activate/<str:uidb64>/<str:token>/', activate_account, name='activate'),
    path('password/reset/confirm/<str:uidb64>/<str:token>/', reset_password_confirm, name='reset_password_confirm'),
]
