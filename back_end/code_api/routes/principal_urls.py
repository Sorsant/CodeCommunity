from django.urls import path, include
from . import question_urls, answer_urls

urlpatterns = [
    path("api/v1/", include(question_urls)),
    path("api/v1/", include(answer_urls)),
]