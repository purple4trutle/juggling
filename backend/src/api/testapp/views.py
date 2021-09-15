from rest_framework import viewsets

from .serializers import TestModelSerialzer
from .models import TestModel

# Create your views here.

class TestModelViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all().order_by('title')
    serializer_class = TestModelSerialzer
