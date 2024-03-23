from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ReservaCrud



router=DefaultRouter()
router.register(prefix="reserv", basename="reserv", viewset=ReservaCrud)


urlpatterns=[
    path('', include(router.urls)),
]