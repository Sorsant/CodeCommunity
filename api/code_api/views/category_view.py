from rest_framework import viewsets
from ..serializer.category_serializer import CategorySerializer
from ..models.comments import Comments

# Create your views here.
  
class CategoryView(viewsets.ModelViewSet):
  serializer_class = CategorySerializer
  queryset = Comments.objects.all()
