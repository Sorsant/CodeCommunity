from rest_framework import viewsets
from ..serializer.question_serializer import QuestionSerializer
from ..models.question import Question

# Create your views here.

class QuestionView(viewsets.ModelViewSet):
  serializer_class = QuestionSerializer
  queryset = Question.objects.all()