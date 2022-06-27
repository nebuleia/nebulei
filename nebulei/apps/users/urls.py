from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.users_login, name='users-login'),
    path('register/', views.users_register, name='users-register'),
]