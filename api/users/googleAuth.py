from django.shortcuts import redirect
from django.views import View
from django.http import HttpResponse
from decouple import config
import urllib.parse
import json
import requests

API_URL = config('URL_BACK')
URL_FRONT = config('URL_FRONT')


def loginGoogle(request):
    try:
        response = requests.get(f"{API_URL}/auth/o/google-oauth2/", params={
            "redirect_uri": f"{API_URL}/accounts/profile/",
        }, cookies=request.COOKIES)

        print(request.COOKIES)
        
        authorization_url = response.json().get("authorization_url")
        if authorization_url:
            return redirect(authorization_url)
        else:
            print("No se encontró la URL de autorización en la respuesta")
    except requests.RequestException as error:
        print(f"Error al realizar la solicitud: {error}")
    return redirect("/")
    

def redirectGoogle(request, *args, **kwargs):
    code, state = str(request.GET['code']), str(request.GET['state'])
    json_obj = {'code': code, 'state': state}
    request.session["state"] = state
    
    url = f"{API_URL}/auth/o/google-oauth2/"
    data = urllib.parse.urlencode(json_obj).encode('utf-8')
    headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': '; '.join([f'{key}={value}' for key, value in request.COOKIES.items()]),
    }
    
    response = requests.post(url, data=data, headers=headers)

    if response.status_code == 201:
        json_res = json.loads(response.text)
        access_token = json_res['access']
        refresh_token = json_res['refresh']
        
        redirect_url = f'{URL_FRONT}/google?access={access_token}&refresh={refresh_token}'
        
        return redirect(redirect_url)
    else:
        return HttpResponse('Error en la petición')