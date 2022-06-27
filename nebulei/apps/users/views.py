from django.shortcuts import render


def users_login(request):
    return render(request, 'users/views/users_login.html')


def users_register(request):
    return render(request, 'users/views/users_register.html')

