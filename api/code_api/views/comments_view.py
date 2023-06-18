from rest_framework import viewsets
from ..serializer.comments_serializer import CommentsSerializer
from ..models.comments import Comments

# Create your views here.
  
class CommentsView(viewsets.ModelViewSet):
  serializer_class = CommentsSerializer
  queryset = Comments.objects.all()
