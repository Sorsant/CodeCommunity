from rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from ..serializer.answer_serializer import AnswerSerializer
from ..models.answer import Answer

# Create your views here.
  
class AnswerView(viewsets.ModelViewSet, ListAPIView):
  serializer_class = AnswerSerializer
  queryset = Answer.objects.all()
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['question__title', 'description', 'user__name', 'created']
  ordering_fields = ['question__title', 'description', 'user__name', 'created']