# Generated by Django 4.2.5 on 2024-01-29 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Huespedes', '0005_alter_huesped_fecha_registro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='huesped',
            name='correo',
            field=models.CharField(),
        ),
    ]