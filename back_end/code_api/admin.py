#Ver en admin los models
from django.contrib import admin
from .models.answer import Answer
from .models.question import Question
from .models.language import Language
from .models.news import News
from .models.community import Community
from .models.user import User
<<<<<<< HEAD
from .models.community import Community
from .models.admin import Admin
=======
from .models.post import Post
from .models.likes import Likes
from .models.comments import Comments
>>>>>>> cbf46ce9d89df157943870dfe49dd0ed63ccf9c9

# Register your models here.
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Language)
admin.site.register(User)
admin.site.register(Community)
admin.site.register(News)
<<<<<<< HEAD
admin.site.register(Admin)
=======
admin.site.register(Post)
admin.site.register(Likes)
admin.site.register(Comments)
>>>>>>> cbf46ce9d89df157943870dfe49dd0ed63ccf9c9
