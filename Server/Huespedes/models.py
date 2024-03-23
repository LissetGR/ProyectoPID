from django.contrib.auth.models import User
from django.db import models

class huesped(models.Model):
    nombre=models.CharField(max_length=50)
    CI=models.CharField(primary_key=True, max_length=12)
    correo=models.EmailField()
    telefono=models.CharField(max_length=8)
    sexo=models.CharField(max_length=1)
    fecha_registro=models.DateTimeField(auto_now_add=True)
    usuario_registro=models.ForeignKey(User,on_delete=models.DO_NOTHING)
    