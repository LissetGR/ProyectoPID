# Generated by Django 4.2.7 on 2023-11-19 22:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
         migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Habitaciones', '0001_initial'),
        ('Huespedes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='reservacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_llegada', models.DateField()),
                ('fecha_salida', models.DateField()),
                ('precio', models.IntegerField()),
                ('activa', models.BooleanField()),
                ('fecha_registro', models.DateField()),
                ('CI_huesped', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Huespedes.huesped')),
                ('numero_habitacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Habitaciones.habitacion')),
                ('usuario_registro', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
