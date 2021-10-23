"""
ASGI config for backend_server project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
#Segundo importar los protocolos
from channels.routing import ProtocolTypeRouter

#Importamos el middleware
from channels.auth import AuthMiddlewareStack
#importamos el metodo de websocket
from channels.routing import URLRouter
#Y importamos lo que se le manadara a ese metodo, que son las ws_urlpatterns
from BASE_DATOS.routing import ws_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_server.settings')

#Este metodo recibe un diccionario
application= ProtocolTypeRouter({
    'http': get_asgi_application(),
    #Importamos el middleware y le mandamos ese parametro
    'websocket':AuthMiddlewareStack(URLRouter(ws_urlpatterns)),
})
