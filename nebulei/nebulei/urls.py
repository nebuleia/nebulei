from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
]

core_urls = [
    path('', include('core.urls')),
]

third_part_urls = [

]


urlpatterns += core_urls + third_part_urls

