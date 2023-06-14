from rest_framework import routers
from code_api import views

router = routers.DefaultRouter()
router.register(r'answers', views.AnswerView, 'answers')

urlpatterns = router.urls