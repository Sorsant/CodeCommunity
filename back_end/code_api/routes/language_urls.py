from rest_framework import routers
from code_api.views.language_view import LanguageView

router = routers.DefaultRouter()
router.register(r'language', LanguageView, 'language')

urlpatterns = router.urls