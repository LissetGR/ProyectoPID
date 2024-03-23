from rest_framework import serializers

from .models import huesped 
from .models import reservacion  
from django.contrib.auth.models import User


class reservaSerializer(serializers.ModelSerializer):
    CI_huesped=serializers.SlugRelatedField(queryset=huesped.objects.all(), slug_field='nombre')    
    usuario_registro= serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='id')
    class Meta:
        model= reservacion
        fields= ('CI_huesped', 'numero_habitacion' ,'fecha_llegada','fecha_salida', 'precio','activa','fecha_registro', 'usuario_registro')  
        
        
  
  
  