from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS

class IsAnAuthor(BasePermission):
    message = 'Editing book is restricted to the authors only.'

    def has_object_permission(self, request, view, obj):
        
        if request.method in SAFE_METHODS:
            return True
        # I need to filter who can only edit book in this part but
        # obj.authors when print is none
        if request.user in obj.users :
            return True

        return False
