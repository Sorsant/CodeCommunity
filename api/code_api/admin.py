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
admin.site.register(Language)
admin.site.register(Category)

@admin.register(Answer)
class BookAdmin(admin.ModelAdmin):
    list_display = ('question', 'user', 'created')

@admin.register(Comments)
class BookAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'created')

@admin.register(Community)
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'created')

@admin.register(News)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created')

@admin.register(Post)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created', 'get_likes_count')
    def get_likes_count(self, obj):
        return obj.likes.count()
    get_likes_count.short_description = 'Likes'

@admin.register(Question)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created')

@admin.register(UserComplement)
class BookAdmin(admin.ModelAdmin):
    list_display = ('user', 'postulation', 'premium', 'created')
