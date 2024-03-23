from django.shortcuts import render
from rest_framework import viewsets
from .models import habitacion
from .serializer import habitacionSerializer
# Create your views here.


class mostrarHabitaciones(viewsets.ModelViewSet):
    queryset= habitacion.objects.all()
    serializer_class=habitacionSerializer


