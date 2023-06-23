#Ver en admin los models
from django.contrib import admin
from .models.answer import Answer
from .models.question import Question
from .models.language import Language
from .models.news import News
from .models.community import Community
from .models.community import Community
from .models.post import Post
from .models.comments import Comments
from .models.category import Category
from .models.user_comp import UserComplement

# Register your models here.
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Language)
admin.site.register(Community)
admin.site.register(News)
admin.site.register(Post)
admin.site.register(Comments)
admin.site.register(Category)
admin.site.register(UserComplement)