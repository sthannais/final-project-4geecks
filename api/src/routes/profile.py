from flask import Blueprint, jsonify, request
from models import Profile

bpProfile = Blueprint('bpProfile', __name__)

@bpProfile.route('/profiles', methods=['GET'])
def all_profiles():
    profiles = Profile.query.all()
    profiles = list(map(lambda profile: profile.serialize(), profiles))
    return jsonify(profiles), 200

@bpProfile.route('/profiles/<int:id>/contacts')
def get_profile_by_id_with_contacts(id):
    profile = Profile.query.get(id) # None

    if not profile: return jsonify({ "msg": "Profile doesn't exist!"}), 404

    return jsonify(profile.serialize_with_contacts()), 200


@bpProfile.route('/profiles', methods=['POST'])
def store_profile():

    title = request.json.get('title')
    users_id = request.json.get('users_id')

    profile = Profile()
    profile.title = title
    profile.users_id = users_id
    profile.save()

    return jsonify(profile.serialize()), 201

@bpProfile.route('/profiles/<int:id>/update', methods=['PUT'])
def update_profile(id):

    title = request.json.get('title')
    users_id = request.json.get('users_id')

    profile = Profile.query.get(id)
    profile.title = title
    profile.users_id = users_id
    profile.save()

    return jsonify(profile.serialize()), 200

@bpProfile.route('/profiles/<int:id>/delete', methods=['DELETE'])
def delete_profile(id):

    profile = Profile.query.get(id)
    profile.delete()

    return jsonify({ "message": "Profile Deleted!"}), 200
