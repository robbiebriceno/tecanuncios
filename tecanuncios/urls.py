from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.home),
    path("logout", views.logout_view)
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)