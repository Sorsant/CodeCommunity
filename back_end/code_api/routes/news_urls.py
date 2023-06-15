from rest_framework import routers
from code_api.views.news_view import NewsView

router = routers.DefaultRouter()
router.register(r'news', NewsView, 'news')

urlpatterns = router.urls