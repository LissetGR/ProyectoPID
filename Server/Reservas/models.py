from django.contrib.auth.models import User
from django.db import models
from Habitaciones.models import habitacion
from Huespedes.models import huesped



    
class reservacion(models.Model):
     CI_huesped=models.ForeignKey(huesped,on_delete=models.CASCADE)
     numero_habitacion=models.ForeignKey(habitacion,on_delete=models.CASCADE)
     fecha_llegada=models.DateField()
     fecha_salida=models.DateField()
     precio=models.IntegerField()
     activa=models.BooleanField(default=False)
     fecha_registro=models.DateTimeField(auto_now_add=True)
     usuario_registro=models.ForeignKey(User,on_delete=models.DO_NOTHING)
     
