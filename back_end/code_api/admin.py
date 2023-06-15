from django.contrib import admin
from .models.answer import Answer
from .models.question import Question
from .models.language import Language
from .models.news import News
from .models.community import Community
from .models.user import User
from .models.community import Community
from .models.admin import Admin

# Register your models here.
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Language)
admin.site.register(User)
admin.site.register(Community)
admin.site.register(News)
admin.site.register(Admin)