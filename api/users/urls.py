from django.urls import path
from rest_framework import routers
from .views import RegisterView, RetrieveUserView, UserView

router = routers.DefaultRouter()
router.register(r'users', UserView, 'users')

urlpatterns = [
  path('register', RegisterView.as_view()),
  path('me', RetrieveUserView.as_view()),
] + router.urls
