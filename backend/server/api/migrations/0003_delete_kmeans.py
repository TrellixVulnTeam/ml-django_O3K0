# Generated by Django 4.0.4 on 2022-05-18 11:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_kmeans_high_schools_alter_kmeans_elementary_schools_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='KMeans',
        ),
    ]