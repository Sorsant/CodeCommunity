# Generated by Django 4.2.2 on 2023-07-03 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0006_remove_usercomplement_user_alter_usercomplement_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercomplement',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
    ]
