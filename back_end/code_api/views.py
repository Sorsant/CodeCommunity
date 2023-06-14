from rest_framework import viewsets
from .serializer.answer_serializer import AnswerSerializer
from .serializer.question_serializer import QuestionSerializer
from .models.answer import Answer
from .models.question import Question

# Create your views here.
class QuestionView(viewsets.ModelViewSet):
  serializer_class = QuestionSerializer
  queryset = Question.objects.all()
  
class AnswerView(viewsets.ModelViewSet):
  serializer_class = AnswerSerializer
  queryset = Answer.objects.all()
