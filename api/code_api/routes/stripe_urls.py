from django.urls import path
from code_api.views.stripe_view import StripeCheckoutView
from code_api.views.email_view import EmailView

urlpatterns = [
    path('create-checkout-session', StripeCheckoutView.as_view()),
    path('email', EmailView.as_view()),
] 