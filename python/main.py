import functions_framework
from flask import jsonify, request
from ShazamAPI import Shazam

@functions_framework.http
def recognize(request):
    # Enable CORS for preflight requests
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    if 'file' not in request.files:
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": "No file part in the request"}), 400, headers)

    file = request.files['file']
    
    if file.filename == '':
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": "No selected file"}), 400, headers)

    if file.content_type != 'audio/mp3':
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": "Invalid file type. Expected 'audio/mp3'"}), 400, headers)

    try:
        file_content = file.read()
    except Exception as e:
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": str(e)}), 500, headers)

    shazam = Shazam(file_content)
    recognize_generator = shazam.recognizeSong()
    try:
        result = next(recognize_generator)
    except StopIteration:
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": "Could not recognize the song"}), 500, headers)
    except Exception as e:
        headers = {'Access-Control-Allow-Origin': '*'}
        return (jsonify({"error": str(e)}), 500, headers)

    headers = {'Access-Control-Allow-Origin': '*'}
    return (jsonify(result), 200, headers)
