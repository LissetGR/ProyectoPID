from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields= ('username', 'password')
      
        
    def create(self, validated_data):     
        password = validated_data.pop('password', None)
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        if user:
             token = Token.objects.create(user=user)
        return token
    
    
# class TokenSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Token
#         fields = ('key',)
#         read_only_fields = ('key',)
