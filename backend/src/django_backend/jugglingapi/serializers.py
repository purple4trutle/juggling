from rest_framework import serializers
from .models import JugglingRecord

class JugglingRecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JugglingRecord
        fields = ('juggler', 'pattern', 'comment', 'catches', 'upload_date', 'audio_file')