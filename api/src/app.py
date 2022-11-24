# pylint: disable=unused-import
import os
import sqlite3
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
import cloudinary
from models import db
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager


from routes.main import bpMain
from routes.user import bpUser
from routes.profile import bpProfile
from routes.coordinates import bpCoordinates
from routes.galleries import bpGallery
from routes.login import bpLogin

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////home/richard/ProyectoFinalFrontEnd/api/database/Pothole.db"
#db = SQLAlchemy(app)
app.config['CORS_HEADERS'] = 'Content-Type'


""" class Agenda(db.Model):
    __tablename__ = 'agendas'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return "<Agenda %r>" % self.name
 """

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)

cloudinary.config(
    cloud_name = os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key = os.getenv('CLOUDINARY_API_KEY'),
    api_secret = os.getenv('CLOUDINARY_API_SECRET'),
    secure = True
)

app.register_blueprint(bpMain)
app.register_blueprint(bpUser, url_prefix='/api')
app.register_blueprint(bpProfile, url_prefix='/api')
app.register_blueprint(bpCoordinates, url_prefix='/api')
app.register_blueprint(bpGallery, url_prefix='/api')
app.register_blueprint(bpLogin, url_prefix='/api')
CORS(app)
if __name__ == '__main__':
    app.run()


""" con = sqlite3.connect("./database/pothole.db")

cur = con.cursor()

ver = cur.execute("SELECT * FROM table_name")
print(ver.fetchone()) """
