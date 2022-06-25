from django.shortcuts import render


def core_home(request):
    return render(request, 'core/views/core_home.html')

