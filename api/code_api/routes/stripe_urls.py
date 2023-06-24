from django.urls import path
from code_api.views.stripe_view import StripeCheckoutView

urlpatterns = [
    path('create-checkout-session', StripeCheckoutView.as_view()),
] 