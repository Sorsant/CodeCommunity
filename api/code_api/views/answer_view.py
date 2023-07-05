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
  search_fields = ['question__title', 'description', 'user__first_name', 'created']
  ordering_fields = ['question__title', 'description', 'user__first_name', 'created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    question = self.request.query_params.get('question', None)
    description = self.request.query_params.get('description', None)
    user = self.request.query_params.get('user', None)
    
    if question:
      queryset = queryset.filter(question__title__contains=question)
      
    if description:
      queryset = queryset.filter(description__contains=description)
      
    if user:
      queryset = queryset.filter(user__first_name__contains=user)
      
    return queryset