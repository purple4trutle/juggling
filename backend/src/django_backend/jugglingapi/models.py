from django.db import models

# Create your models here.
class JugglingRecord(models.Model):
    audio_file = models.FileField(upload_to='tmp/')
    pattern = models.CharField(max_length=60)
    juggler = models.CharField(max_length=100)
    comment = models.TextField(null=True)
    catches = models.IntegerField()
    upload_date = models.DateTimeField(auto_now_add=True)
    