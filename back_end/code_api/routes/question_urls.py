from rest_framework import routers
from code_api import views

router = routers.DefaultRouter()
router.register(r'question', views.QuestionView, 'question')

urlpatterns = router.urls