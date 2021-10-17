# myapi/urls.py
from django.urls import path
from . import views



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('juggling_records/', views.juggling_records_view, name='juggling_record_vew' )
]
