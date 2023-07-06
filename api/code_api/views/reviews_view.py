from rest_framework import filters, viewsets
from rest_framework.views import APIView
from ..serializer.reviews_serializer import ReviewsSerializer, ReviewSerializer
from ..models.reviews import Reviews, Review

class ReviewsView(viewsets.ModelViewSet, APIView):
  serializer_class = ReviewsSerializer
  queryset = Reviews.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['id__first_name']
  ordering_fields = ['id__first_name']

  
class ReviewView(viewsets.ModelViewSet, APIView):
  serializer_class = ReviewSerializer
  queryset = Review.objects.all()
  
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['reviews_id__reviews']
  ordering_fields = ['id__first_name']