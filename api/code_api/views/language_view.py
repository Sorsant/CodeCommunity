from rest_framework import viewsets
from ..serializer.language_serializer import LanguageSerializer
from ..models.language import Language

# Create your views here.
  
class LanguageView(viewsets.ModelViewSet):
  serializer_class = LanguageSerializer
  queryset = Language.objects.all()