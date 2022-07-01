from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
from rest_framework import status
import os

# def processProgram(program, filepath):
#     '''
#     This function is to process the program created by user so that
#     the "\n" inside quotes is not treated as escape sequence
#     while creating the program file.
#     '''
    
#     splitProgram = program.split('"')
#     with open(filepath, 'w') as f:
#         f.write('')
#     parsedProgram = r''''''
#     with open(filepath, 'a') as f:
#         for index, item in enumerate(splitProgram):
#             if index%2 == 0:
#                 f.writelines(item)
#             else:
#                 f.writelines(item.replace("\n", "\\n"))
#     with open(filepath, "r") as f:
#         print(f.readlines())
        
#         parsedProgram += (splitProgram[0] + '"')
#         for item in splitProgram[1:-1]:
#             parsedProgram += (item + '"')
#         parsedProgram += splitProgram[-1]
#         print(fr"{parsedProgram}")
#     return parsedProgram

# Create your views here.
@api_view(['GET'])
def index(request):
    return Response({"Success": "Success"})

@api_view(['GET'])
def runCode(request, language):
    if language == 'c':
        myprogramstring = '''#include <stdio.h>\nint main(){\n    printf("Hello World Using C");\n    return 0;\n}'''
        f = open("./programs/first.c", "w")
        f.write(myprogramstring)
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
        f.write('''#include <iostream>\nusing namespace std;\nint main(){\n    cout<<"Hello World Using C++"<<endl;\n    return 0;\n}''')
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
        f.write('''print("Hello World Using Python")''')
        f.close()
        s = subprocess.run("python ./programs/first.py", shell = True, capture_output=True, text=True)
        if s.returncode == 0:
            output = s.stdout
        else:
            output = s.stderr
        os.remove("./programs/first.py")
        return Response({"language": language, "output": output})
    return Response({"error": "Language Not Supported! Bad Request!"}, status=status.HTTP_400_BAD_REQUEST)