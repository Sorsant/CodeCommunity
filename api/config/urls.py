from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from users.views import activate_account, reset_password_confirm
from users.googleAuth import RedirectSocial, LoginGoogle

urlpatterns = [
    path('admin/', admin.site.urls),
    path('codec/', include('code_api.routes.principal_urls')),
    path('stripe/', include('code_api.routes.stripe_urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('google/', LoginGoogle.as_view()),
    path('accounts/profile/', RedirectSocial.as_view()),
    path('activate/<str:uidb64>/<str:token>/', activate_account, name='activate'),
    path('password/reset/confirm/<str:uidb64>/<str:token>/', reset_password_confirm, name='reset_password_confirm'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)