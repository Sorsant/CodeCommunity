from rest_framework import routers
from code_api.views.post_view import PostView

router = routers.DefaultRouter()
router.register(r'post', PostView, 'post')

urlpatterns = router.urls