from rest_framework import routers
from accounts.views import UserView

router = routers.DefaultRouter()
router.register(r'users', UserView, 'users')

urlpatterns = router.urls