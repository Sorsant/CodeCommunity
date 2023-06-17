from rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from ..serializer.question_serializer import QuestionSerializer
from ..models.question import Question

# Create your views here.

class QuestionView(viewsets.ModelViewSet, ListAPIView):
  serializer_class = QuestionSerializer
  queryset = Question.objects.all()
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['title', 'description', 'user__name', 'created']
  ordering_fields = ['title', 'description', 'user__name', 'created']