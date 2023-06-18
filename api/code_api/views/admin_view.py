from rest_framework import viewsets
from ..serializer.admin_serializer import AdminSerializer
from ..models.admin import Admin

# Create your views here.
  
class AdminView(viewsets.ModelViewSet):
  serializer_class = AdminSerializer
  queryset = Admin.objects.all()
