# Generated by Django 4.2.5 on 2024-01-28 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Huespedes', '0004_huesped_fecha_registro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='huesped',
            name='fecha_registro',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
