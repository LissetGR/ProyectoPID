from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import mostrarHabitaciones



router=DefaultRouter()
router.register(prefix="post", basename="post",viewset= mostrarHabitaciones)


urlpatterns=[
    path('', include(router.urls))
]