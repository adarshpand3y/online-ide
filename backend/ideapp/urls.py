from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('run/<str:language>', views.runCode),
]
