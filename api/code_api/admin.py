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
from .models.reviews import Reviews

# Register your models here.
admin.site.register(Language)
admin.site.register(Category)

@admin.register(Answer)
class BookAdmin(admin.ModelAdmin):
    list_display = ('question', 'user', 'created', 'is_delete')

@admin.register(Comments)
class BookAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'created', 'is_delete')

@admin.register(Community)
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'created')

@admin.register(News)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created')

@admin.register(Post)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created', 'get_likes_count', 'is_delete')
    def get_likes_count(self, obj):
        return obj.likes.count()
    get_likes_count.short_description = 'Likes'

@admin.register(Question)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created', 'is_delete')
    
@admin.register(Reviews)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'review', 'comments', 'is_delete')
    
    def get_review_count(self, obj):
        return obj.review.count()
    get_review_count.short_description = 'Reviews'
    
    def get_comments_count(self, obj):
        return obj.comments.count()
    get_comments_count.short_description = 'Comments'

@admin.register(UserComplement)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'postulation', 'premium', 'created', 'is_delete')
