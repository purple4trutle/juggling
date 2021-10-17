from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

from .serializers import JugglingRecordSerializer
from .models import JugglingRecord

# Create your views here.
@api_view(['GET','POST'])
def juggling_records_view(request):
    if request.method == 'GET':
        records = JugglingRecord.objects.all()
        serializer = JugglingRecordSerializer(records, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = JugglingRecordSerializer(data=request.data)
        if serializer.is_valid():
            '''file = request.FILES['audio_file']
            path = default_storage.save('tmp/somename.pdf', ContentFile(file.read()))'''
            serializer.save()
            return Response(serializer.data, status=201)

        else:
            return Response(serializer.errors, status=400)

