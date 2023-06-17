from rest_framework import routers
from code_api.views.category_view import CategoryView

router = routers.DefaultRouter()
router.register(r'category', CategoryView, 'category')

urlpatterns = router.urls