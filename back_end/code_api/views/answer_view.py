from rest_framework import viewsets
from ..serializer.answer_serializer import AnswerSerializer
from ..models.answer import Answer

# Create your views here.
  
class AnswerView(viewsets.ModelViewSet):
  serializer_class = AnswerSerializer
  queryset = Answer.objects.all()
