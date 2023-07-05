from django.urls import path
from code_api.views.gpt_view import ChatGPTView

urlpatterns = [
    # Otras rutas...
    path('openai_chat', ChatGPTView.as_view()),    
]