from rest_framework import serializers
from .models import habitacion, tipoHabitacion
from django.contrib.auth.models import User

class tipoSerializer(serializers.ModelSerializer):
    class Meta:
        model= tipoHabitacion
        fields=('tipo')
 
class habitacionSerializer(serializers.ModelSerializer):
    id_tipo=serializers.SlugRelatedField(queryset=tipoHabitacion.objects.all(), slug_field='tipo')    
    usuario_registro= serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    class Meta:
        model= habitacion
        fields=('numero','id_tipo','descripcion', 'info_add', 'disponible','fecha_registro', 'usuario_registro', 'precio')
        
        
