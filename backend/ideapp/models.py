from django.db import models

# Create your models here.
class Question(models.Model):
    question = models.TextField()
    solution = models.TextField()
    public_test_cases = models.TextField()
    private_test_cases = models.TextField()