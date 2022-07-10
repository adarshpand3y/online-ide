from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
from rest_framework import status
import os, uuid, shutil

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response({"Success": "Success"})

@api_view(['POST'])
def runCode(request):
    language = request.data.get("language")
    if language != "c" and language != "cpp" and language != "py" and language != "java":
        return Response({"error": "Language Not Supported! Bad Request!"}, status=status.HTTP_400_BAD_REQUEST)
    op = "6\n0\n35\n0\n"
    program = request.data.get("program")
    path = "programs/"
    programName = uuid.uuid4()
    fullProgramPath = f"{path}{programName}"
    if language == 'c':
        fullProgramPath += ".c"
        f = open(fullProgramPath, "w")
        f.write(program)
        f.close()
        s = subprocess.run(f"gcc {fullProgramPath} -o {fullProgramPath[:-2]}.out && {fullProgramPath[:-2]}.out < ./ideapp/ip.txt", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            if output == op:
                print("Correct Output")
            else:
                print("Incorrect Output")
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
        s = subprocess.run(f"g++ {fullProgramPath} -o {fullProgramPath[:-4]}.out && {fullProgramPath[:-4]}.out < ./ideapp/ip.txt", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            if output == op:
                print("Correct Output")
            else:
                print("Incorrect Output")
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
        s = subprocess.run(f"python {fullProgramPath} < ./ideapp/ip.txt", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            if output == op:
                    print("Correct Output")
            else:
                print("Incorrect Output")
        else:
            output = s.stderr
        os.remove(fullProgramPath)
        return Response({"language": language, "output": output})
    if language == 'java':
        output = "Java Found!"
        folderName = f"a{uuid.uuid4()}a"
        os.makedirs(f"./programs/{folderName}")
        f = open(f"./programs/{folderName}/Solution.java", "w")
        f.write(program)
        f.close()
        s = subprocess.run(f"cd programs/{folderName} && javac Solution.java && java Solution  < ../../ideapp/ip.txt", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
            if output == op:
                    print("Correct Output")
            else:
                print("Incorrect Output")
        else:
            output = s.stderr
        shutil.rmtree(f"./programs/{folderName}")
        return Response({"language": language, "output": output})