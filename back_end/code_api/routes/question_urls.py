from rest_framework import routers
from code_api.views.question_view import QuestionView

router = routers.DefaultRouter()
router.register(r'question', QuestionView, 'question')

urlpatterns = router.urls