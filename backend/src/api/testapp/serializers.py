from .models  import TestModel

from rest_framework import serializers

class TestModelSerialzer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestModel
        fields = ('title', 'description')
