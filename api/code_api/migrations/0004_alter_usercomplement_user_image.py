# Generated by Django 4.2.2 on 2023-06-25 20:41

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0003_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercomplement',
            name='user_image',
            field=cloudinary.models.CloudinaryField(max_length=255, verbose_name='image'),
        ),
    ]
