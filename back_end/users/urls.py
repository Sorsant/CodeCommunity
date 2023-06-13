from django.urls import path, include
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('api/v1/', include(router.urls))
]