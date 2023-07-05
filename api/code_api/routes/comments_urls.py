from rest_framework import routers
from code_api.views.comments_view import CommentsView

router = routers.DefaultRouter()
router.register(r'comments', CommentsView, 'comments')

urlpatterns = router.urls