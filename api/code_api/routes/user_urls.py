from rest_framework import routers
from code_api.views.user_view import UserView

router = routers.DefaultRouter()
router.register(r'user', UserView, 'user')

urlpatterns = router.urls