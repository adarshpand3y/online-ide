from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
from rest_framework import status
import os

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response({"Success": "Success"})

@api_view(['POST'])
def runCode(request):
    language = request.POST["language"]
    program = request.POST["program"]
    if language == 'c':
        f = open("./programs/first.c", "w")
        f.write(program)
        f.close()
        s = subprocess.run("gcc ./programs/first.c -o ./programs/first.out && ./programs/first.out", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            os.remove("./programs/first.out")
        else:
            output = s.stderr
        os.remove("./programs/first.c")
        return Response({"language": language, "output": output})
    if language == 'cpp':
        f = open("./programs/first.cpp", "w")
        f.write(program)
        f.close()
        s = subprocess.run("g++ ./programs/first.cpp -o ./programs/first.out && ./programs/first.out", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            os.remove("./programs/first.out")
        else:
            output = s.stderr
        os.remove("./programs/first.cpp")
        return Response({"language": language, "output": output})
    if language == 'py':
        f = open("./programs/first.py", "w")
        f.write(program)
        f.close()
        s = subprocess.run("python ./programs/first.py", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
        else:
            output = s.stderr
        os.remove("./programs/first.py")
        return Response({"language": language, "output": output})
    return Response({"error": "Language Not Supported! Bad Request!"}, status=status.HTTP_400_BAD_REQUEST)