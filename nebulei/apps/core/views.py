from django.shortcuts import render


def core_home(request):
    return render(request, 'core/views/core_home.html')

def core_about(request):
    return render(request, 'core/views/core_about.html')