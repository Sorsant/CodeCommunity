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
  search_fields = ['title', 'description', 'user__first_name', 'created']
  ordering_fields = ['title', 'description', 'user__first_name', 'created']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    title = self.request.query_params.get('title', None)
    description = self.request.query_params.get('description', None)
    user = self.request.query_params.get('user', None)
    
    if title:
      queryset = queryset.filter(title__contains=title)
      
    if description:
      queryset = queryset.filter(description__contains=description)
      
    if user:
      queryset = queryset.filter(user__first_name__contains=user)
      
    return queryset
    