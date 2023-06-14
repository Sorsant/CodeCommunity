from django.contrib import admin
from .models.answer import Answer
from .models.question import Question
from .models.language import Language
from .models.user import User

# Register your models here.
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Language)
admin.site.register(User)