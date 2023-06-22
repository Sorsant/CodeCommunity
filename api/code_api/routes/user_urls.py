from django.urls import path
from code_api.views import user_view
from rest_framework import routers
from code_api.views import user_view

router = routers.DefaultRouter()
router.register(r'user_extras', user_view.UserExtraView, 'user_extras')

urlpatterns = [
	path('register/', user_view.UserRegister.as_view(), name='register'),
	path('login/', user_view.UserLogin.as_view(), name='login'),
	path('logout/', user_view.UserLogout.as_view(), name='logout'),
	path('user/', user_view.UserView.as_view(), name='user'),
] + router.urls