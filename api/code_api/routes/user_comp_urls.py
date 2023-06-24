from rest_framework import routers
from code_api.views.user_comp_view import UserComplementView

router = routers.DefaultRouter()
router.register(r'user_extras', UserComplementView, 'user_extras')

urlpatterns = router.urls