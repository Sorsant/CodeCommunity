from rest_framework import routers
from code_api.views.answer_view import AnswerView

router = routers.DefaultRouter()
router.register(r'answers', AnswerView, 'answers')

urlpatterns = router.urls