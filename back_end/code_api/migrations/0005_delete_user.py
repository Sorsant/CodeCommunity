# Generated by Django 4.2.2 on 2023-06-14 16:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0004_alter_question_title'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
