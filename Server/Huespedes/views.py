from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .models import huesped  
from .serializer import HuespedSerializer
from rest_framework.response import Response
from rest_framework import status

from rest_framework import viewsets
# Create your views here.

# class HuespedesCrud(APIView):
    
#     def get(self,request):
#         huespedes=huesped.objects.all()
#         serializer= HuespedesSerializer(huespedes,many='True')   
#         return Response(serializer.data)

#     def post(self,request):
#         huespedes= HuespedesSerializer(data=request.data)
#         print('aqui estoy')
#         if huespedes.is_valid():
#             print('por aqui voy')
#             validate_data= huespedes.validated_data
#             print('por aqui voy2')
#             huespedesValidado=huesped(**validate_data) 
#             print('por aqui voy3')
#             serializer_response=HuespedesSerializer(huespedes)  
#             huespedesValidado.save()
#             print('aqui estoy ahora')
#             return Response(huespedes)
#         else:
#             raise Exception('Error al crear')
        
       

class HuespedCrud(viewsets.ModelViewSet):
    queryset= huesped.objects.all()
    serializer_class=HuespedSerializer

