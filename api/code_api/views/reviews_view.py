from rest_framework import filters, viewsets
from rest_framework.views import APIView
from ..serializer.reviews_serializer import ReviewsSerializer
from ..models.reviews import Reviews

class ReviewsView(viewsets.ModelViewSet, APIView):
  serializer_class = ReviewsSerializer
  queryset = Reviews.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['id__first_name', 'review', 'comments']
  ordering_fields = ['id__first_name', 'review', 'comments']
  
  def get_queryset(self):
    queryset = super().get_queryset()
    name = self.request.query_params.get('name', None)
    review = self.request.query_params.get('review', None)
    comments = self.request.query_params.get('comments', None)
    
    if name:
      queryset = queryset.filter(id__first_name__contains=name)
      
    if review:
      queryset = queryset.filter(review__contains=review)
      
    if comments:
      queryset = queryset.filter(comments__contains=comments)
      
    return queryset