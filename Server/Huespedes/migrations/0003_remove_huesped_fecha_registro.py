# Generated by Django 4.2.5 on 2024-01-28 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Huespedes', '0002_alter_huesped_usuario_registro'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='huesped',
            name='fecha_registro',
        ),
    ]
