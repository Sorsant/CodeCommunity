from django.contrib import admin
from .models.answer import Answer
from .models.question import Question

# Register your models here.
admin.site.register(Question)
admin.site.register(Answer)