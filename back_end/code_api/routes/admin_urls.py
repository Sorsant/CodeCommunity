from rest_framework import routers
from code_api.views.admin_view import AdminView

router = routers.DefaultRouter()
router.register(r'admin', AdminView, 'admin')

urlpatterns = router.urls