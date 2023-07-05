from rest_framework import viewsets
from ..serializer.category_serializer import CategorySerializer
from ..models.category import Category

# Create your views here.
  
class CategoryView(viewsets.ModelViewSet):
  serializer_class = CategorySerializer
  queryset = Category.objects.all()
