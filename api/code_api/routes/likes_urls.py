from rest_framework import routers
from code_api.views.likes_view import LikesView

router = routers.DefaultRouter()
router.register(r'likes', LikesView, 'likes')

urlpatterns = router.urls