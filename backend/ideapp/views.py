from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
from rest_framework import status
import os

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response({"Success": "Success"})

@api_view(['GET'])
def runCode(request, language):
    if language == 'cpp':
        f = open("./programs/first.cpp", "w")
        f.write('''#include <iostream>\nusing namespace std;\nint main(){\n    cout<<"Hello World"<<endl;\n    return 0;\n}''')
        f.close()
        s = subprocess.run("g++ ./programs/first.cpp -o ./programs/first.out && ./programs/first.out", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            os.remove("./programs/first.out")
        else:
            output = s.stderr
        os.remove("./programs/first.cpp")
        return Response({"language": language, "output": output})
    return Response({"error": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)