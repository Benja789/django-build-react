from django.db import models

# Create your models here.
class Persona (models.Model):
    id = models.BigAutoField(primary_key=True)
    frist_name= models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)