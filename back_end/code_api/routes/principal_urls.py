from django.urls import path, include
from . import answer_urls, community_urls, language_urls, news_urls, question_urls, user_urls

urlpatterns = [
<<<<<<< HEAD
    path("api/", include(question_urls)),
    path("api/", include(answer_urls)),
=======
    path("api/", include(answer_urls)),
    path("api/", include(community_urls)),
    path("api/", include(language_urls)),
    path("api/", include(news_urls)),
    path("api/", include(question_urls)),
    path("api/", include(user_urls)),
>>>>>>> b6c0a6030ea2ab95956098f9cddc734070ec7ae0
]