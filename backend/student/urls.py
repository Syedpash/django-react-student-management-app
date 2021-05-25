from django.urls import path, re_path
from .views import students_detail, students_list

urlpatterns = [
    re_path(r'^api/students/$', students_list),
    re_path(r'^api/students/([0-9])$', students_detail),
]