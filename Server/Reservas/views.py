from django.shortcuts import render
from rest_framework.views import APIView
from .models import reservacion
from .serializer import reservaSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import viewsets
# Create your views here.

# class ReservaCrud(APIView):
#     def post(self, request):
#         reserva= reservaSerializer(data=request.data)
#         if reserva.is_valid():
#             reserva.save()
#             return Response(reserva)
#         else:
#             raise Exception('Error al crear')  

        
        
#     def get(self,request):
#         queryset= reservacion.objects.all()
#         serializer=reservaSerializer(queryset, many='True') 
#         return Response(serializer.data)
    
    
    

class ReservaCrud(viewsets.ModelViewSet):
    
    queryset= reservacion.objects.all()
    serializer_class=reservaSerializer
