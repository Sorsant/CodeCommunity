# Import Stripe

from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
import stripe

# Import Email  

# from django.shortcuts import render
# from django.views import View

# from django.template.loader import get_template
# from django.core.mail import EmailMultiAlternatives

stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            # success_url = ''.join(settings.CORS_ALLOWED_ORIGINS) + '/?success=true&session_id={CHECKOUT_SESSION_ID}'
            # cancel_url = ''.join(settings.CORS_ALLOWED_ORIGINS) + '/?canceled=true'
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'price_1NL9cvB0138DzwzeUYrOaM98',
                        'quantity': 1,
                    },
                    {
                        'price': 'price_1NMZ1OB0138DzwzeqwxNveSv',
                        'quantity': 1,
                    },
                    {
                        'price': 'price_1NMZAtB0138Dzwzee1eT4Ok1',
                        'quantity': 1,
                    },
                    
                ],
                payment_method_types= ['card'],
                mode='payment',
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )
            
            return redirect(checkout_session.url)
        except:
            return Response(
        {'error': f'Something went wrong when creating stripe checkout session'},
        status=status.HTTP_500_INTERNAL_SERVER_ERROR
    )


# class EmailView(View):
#     def get(self, request):
#         return render(request, 'mail/send.html') 
    
#     def post(self, request):
#         email = request.POST.get('email')
#         print(email)

#         template = get_template('mail/email-order-success.html')

#         # Se renderiza el template y se envias parametros
#         content = template.render({'email': email})

#         # Se crea el correo (titulo, mensaje, emisor, destinatario)
#         msg = EmailMultiAlternatives(
#             'Gracias por tu compra',
#             'Hola, te enviamos un correo con tu factura',
#             settings.EMAIL_HOST_USER,
#             [email]
#         )

#         msg.attach_alternative(content, 'text/html')
#         msg.send()

#         return render(request, 'mail/send.html')