from django.db import models
from .question import Question
from .user import User

# Create your models here.
class Answer(models.Model):
  question = models.ForeignKey(Question, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  description = models.TextField(max_length=3000)
  user = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'my_foreign_key__isnull': True})
  created = models.DateTimeField(auto_now_add=True, editable=False)
  
  def __str__(self):
    return self.question.title