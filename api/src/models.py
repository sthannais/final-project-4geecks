from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))# usuario persona
    password = db.Column(db.String(120))# usuario persona
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
    public_id = db.Column(db.String(120))
    muni_firstname = db.Column(db.String(120))
    muni_lastname = db.Column(db.String(120))
    muni_email = db.Column(db.String(120))
    muni_phone = db.Column(db.String(10))
    muni_position = db.Column(db.String(120))
    municipality = db.Column(db.String(120))
    muni_password = db.Column(db.String(120))

    user_profile = db.relationship('Profile', foreign_keys='[User.profile_id]')

    def serialize(self):
        return {
            "profile_id": self.profile_id,
            "email": self.email,
            "password": self.password
        }

    def serialize_muni(self):
        return {
            "muni_firstname":self.muni_firstname,
            "muni_lastname":self.muni_lastname,
            "muni_email":self.muni_email,
            "muni_phone":self.muni_phone,
            "muni_password":self.muni_hashed_password,
            "muni_position":self.muni_position,
            "municipality":self.municipality,
            "profile_id":self.profile_id,
            "public_id":self.public_id,
            }


    def serialize_with_profile(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "profile_id": [profile_id.serialize() for profile_id in self.profile_id]
        }

    # def serialize_with_profile_with_coordinates(self):
    #     return {
    #         "id": self.id,
    #         "email": self.email,
    #         "password": self.password,
    #         "profile": [profile.serialize_with_coordinates() for profile in self.profile]
    #     }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    
class Profile(db.Model):
    __tablename__ = 'profile'
    id = db.Column(db.Integer, primary_key=True)
    profilename = db.Column(db.String(100), nullable=False)
    #users_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    #coordinates = db.relationship('Contact', cascade="all, delete", backref="profile")

    def serialize(self):
        return {
            "id": self.id,
            "profilename": self.profilename,
            
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit() 

"""     def serialize_with_coordinates(self):
        return {
            "id": self.id,
            "profilename": self.profilename,
            "coordinates": [contact.serialize() for contact in self.coordinates]
        } """




class Coordinates(db.Model):
    __tablename__ = 'coordinates'
    id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.String(20), nullable=False)
    longitude = db.Column(db.String(20))
    imageurl = db.Column(db.String(20))
    state = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def serialize(self):
        return {
            "latitude": self.latitude,
            "longitude": self.longitude,
            "imageurl": self.imageurl,
            "state": self.state,
            "id": self.id

        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Gallery(db.Model):
    __tablename__ = 'galleries'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    filename = db.Column(db.String(200), nullable=False)
    password = db.Column(db.Boolean(), default=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))



    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "filename": self.filename,
            "password": self.password,
            "user_id": self.user_id

        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()