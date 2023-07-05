from rest_framework import routers
from code_api.views.reviews_view import ReviewsView

router = routers.DefaultRouter()
router.register(r'reviews', ReviewsView, 'reviews')

urlpatterns = router.urls