from django.shortcuts import render
from django.http import JsonResponse
from BASE_DATOS.models import Persona

# Create your views here.
def conexion_react(request):
    if request.method=='GET':
        personas = list(Persona.objects.values())
    return JsonResponse(personas, safe=False)