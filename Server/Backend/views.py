from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView  
from .serializer import  UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authtoken.models import Token

# class UserCrud(APIView):
#     def post(self, request):
#         user= UserSerializer(data=request.data) 
#         print('aqui estoy')
#         if user.is_valid():  
#             validate_data= user.validated_data
#             usuario=User(**validate_data) 
#             serializer_response=UserSerializer(usuario)  
#             print('aqui estoy2')
#             token=Token.objects.get_or_create(user=user)
#             print(token.key) 
#             usuario.save()  
#             print('aqui voy')
#             return Response(serializer_response)
#         else:
#             raise Exception('Error al crear')
    
   
        
    # def get(self, request):
    #     queryset= User.objects.all()
    #     serializer=UserSerializer(queryset, many='True') 
    #     print(serializer.data)
    #     return Response(serializer.data)
        
class UserCrud(viewsets.ModelViewSet):  
    queryset= User.objects.all()
    serializer_class=UserSerializer
     
    # def perform_create(self, serializer):
    #     instance = serializer.save()
    #     token = Token.objects.create(user=instance)

    #     # Agrega el token a la instancia del usuario
    #     instance.token = token.key
    #     instance.save()
    #     return instance