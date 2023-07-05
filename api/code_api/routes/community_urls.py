from rest_framework import routers
from code_api.views.community_view import CommunityView

router = routers.DefaultRouter()
router.register(r'community', CommunityView, 'community')

urlpatterns = router.urls