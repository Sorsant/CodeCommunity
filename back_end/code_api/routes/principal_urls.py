from django.urls import path, include
from . import question_urls, answer_urls

urlpatterns = [
    path("api/", include(question_urls)),
    path("api/", include(answer_urls)),
]