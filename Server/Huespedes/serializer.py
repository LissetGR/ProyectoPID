from rest_framework import serializers
from .models import huesped
from django.contrib.auth.models import User

class HuespedSerializer(serializers.ModelSerializer):
    usuario_registro= serializers.SlugRelatedField(queryset=User.objects.all(),slug_field='username')
    class Meta:
        model= huesped
        fields= ('nombre', 'CI', 'correo','telefono','sexo','usuario_registro', 'fecha_registro')

