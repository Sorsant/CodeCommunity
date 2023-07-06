from rest_framework import routers
from code_api.views.reviews_view import ReviewsView, ReviewView

router = routers.DefaultRouter()
router.register(r'reviews_user', ReviewsView, 'reviews_user')
router.register(r'review', ReviewView, 'review')

urlpatterns = router.urls