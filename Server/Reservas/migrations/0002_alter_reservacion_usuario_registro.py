# Generated by Django 4.2.5 on 2023-12-10 20:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Reservas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservacion',
            name='usuario_registro',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
    ]
