from django.shortcuts import render
from django.http import JsonResponse
from BASE_DATOS.models import Persona
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def conexion_react(request):
    personas = list(Persona.objects.values())
    return JsonResponse(personas, safe=False)
    
        

@csrf_exempt
def add(request):
    nombre = request.POST['nombre']
    apellido =request.POST['apellido']
    personaNueva = Persona(frist_name=nombre, last_name =apellido)
    personaNueva.save()
    print(request)
    return HttpResponse("user") 
