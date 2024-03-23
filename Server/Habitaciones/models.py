
from django.db import models
from rest_framework import authentication,authtoken
from django.contrib.auth.models import User



class tipoHabitacion(models.Model):
    id_tipo=models.AutoField(primary_key=True)
    tipo=models.CharField()
    
    
class habitacion(models.Model):
    numero=models.CharField(primary_key=True)
    id_tipo=models.ForeignKey(tipoHabitacion,on_delete=models.CASCADE)
    precio=models.IntegerField()
    descripcion= models.CharField(max_length=500)
    info_add=models.CharField(max_length=500) 
    disponible=models.BooleanField(default=True,blank=True)
    fecha_registro=models.DateTimeField(auto_now_add=True)
    usuario_registro=models.ForeignKey(User, on_delete=models.DO_NOTHING)
    