from django.urls import path, include
from . import answer_urls, community_urls, language_urls, news_urls, question_urls, user_urls

urlpatterns = [
    path("api/", include(answer_urls)),
    path("api/", include(community_urls)),
    path("api/", include(language_urls)),
    path("api/", include(news_urls)),
    path("api/", include(question_urls)),
    path("api/", include(user_urls)),
]