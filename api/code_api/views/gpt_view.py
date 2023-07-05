import requests
from django.conf import settings
from django.http import JsonResponse

class ChatGPTView:
    def __init__(self, GPT_SECRET_KEY):
        self.GPT_SECRET_KEY = settings.GPT_SECRET_KEY
        self.api_url = 'https://api.openai.com/v1/chat/completions'

    def generate_response(self, user_message):
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.GPT_SECRET_KEY}'
        }

        data = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                {'role': 'user', 'content': user_message}
            ],
            'temperature': 0.7
        }

        response = requests.post(self.api_url, json=data, headers=headers)
        response_data = response.json()

        # Extraer la respuesta del objeto JSON de la respuesta de OpenAI
        output_text = response_data['choices'][0]['message']['content']

        return output_text

    def openai_chat(self, request):
        user_message = request.GET.get('message', '')  # Obtener el mensaje del usuario desde la solicitud GET

        output_text = self.generate_response(user_message)

        # Devolver la respuesta al frontend como JSON
        return JsonResponse({'output_text': output_text})
