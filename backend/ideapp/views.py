from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
from rest_framework import status
import os, uuid

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response({"Success": "Success"})

@api_view(['POST'])
def runCode(request):
    print(request.data)
    language = request.data.get("language")
    print("L=",language)
    if language != "c" and language != "cpp" and language != "py":
        print("Sending")
        return Response({"error": "Language Not Supported! Bad Request!"}, status=status.HTTP_400_BAD_REQUEST)
    program = request.data.get("program")
    path = "programs/"
    programName = uuid.uuid4()
    fullProgramPath = f"{path}{programName}"
    if language == 'c':
        fullProgramPath += ".c"
        print(fullProgramPath)
        f = open(fullProgramPath, "w")
        f.write(program)
        f.close()
        s = subprocess.run(f"gcc {fullProgramPath} -o {fullProgramPath[:-2]}.out && {fullProgramPath[:-2]}.out", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            os.remove(f"{fullProgramPath[:-2]}.out")
        else:
            output = s.stderr
        os.remove(fullProgramPath)
        return Response({"language": language, "output": output})
    if language == 'cpp':
        fullProgramPath += ".cpp"
        f = open(fullProgramPath, "w")
        f.write(program)
        f.close()
        s = subprocess.run(f"g++ {fullProgramPath} -o {fullProgramPath[:-4]}.out && {fullProgramPath[:-4]}.out", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            os.remove(f"{fullProgramPath[:-4]}.out")
        else:
            output = s.stderr
        os.remove(fullProgramPath)
        return Response({"language": language, "output": output})
    if language == 'py':
        fullProgramPath += ".py"
        f = open(fullProgramPath, "w")
        f.write(program)
        f.close()
        s = subprocess.run(f"python {fullProgramPath}", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
        else:
            output = s.stderr
        os.remove(fullProgramPath)
        return Response({"language": language, "output": output})