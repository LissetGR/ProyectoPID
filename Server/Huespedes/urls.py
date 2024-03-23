# from django.urls import include, path
# from rest_framework.routers import DefaultRouter
# from .views import HuespedesCrud




# urlpatterns=[
#     path('', HuespedesCrud.as_view()),
# ]


from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import HuespedCrud



router=DefaultRouter()
router.register(prefix="huesp", basename="huesp",viewset= HuespedCrud)


urlpatterns=[
    path('', include(router.urls))
]