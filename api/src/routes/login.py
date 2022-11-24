import uuid
from flask import Blueprint, jsonify, request , Flask, make_response
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import jwt
import datetime

bpLogin = Blueprint('bpLogin', __name__)

@bpLogin.route('/login', methods=['POST'])
def ingresar():
    data = request.get_json()
    email = data['email']
    password = data['password']
    print("_______________")
    print(email)
    print(password)


    if not email: return jsonify({"status": "error", "code":400, "mensaje": "User's email is required"}), 400
    if not password : return jsonify({"status": "error", "code": 400, "mensaje": "User's password is required"}), 400

    usuario = User.query.filter_by(email=email).first()
    if not usuario : return jsonify({"status": "error", "code": 401, "mensaje": "User's email or password is incorrect"}), 400
#Valido si el usuario existe
#Valido si la contraseña ingresada coincide con la guardada
    if not check_password_hash(usuario.password, password) : return jsonify ({"status": "error", "code": 401, "mensaje": "User's email or password is incorrect"}), 400

    # expires = datetime.timedelta(days=1)
    # access_token = create_access_token(identity = usuario.id, expi
    # res_delta =expires

    data = {
    #"access_token" : access_token,
        "usuario": usuario.serialize()
    }

    return jsonify({ "status": "éxito", "code": 200, "mensaje": "User has logged in correctly", "data": data}), 200
    
        