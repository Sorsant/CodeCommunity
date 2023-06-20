# Generated by Django 4.2.2 on 2023-06-19 23:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0007_news_image_post_image_question_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='likes',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, related_name='liked_post', to='code_api.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_post', to='code_api.user'),
        ),
        migrations.DeleteModel(
            name='Likes',
        ),
    ]
