from flask import Blueprint, jsonify, request, Flask
from models import Coordinates, db



bpCoordinates = Blueprint('bpCoordinates', __name__)

@bpCoordinates.route('/coordinates', methods=['GET'])
def coordinates():
          coordinates = Coordinates.query.all()
          coordinates = list(map(lambda crdnt: crdnt.serialize(), coordinates))
          return jsonify(coordinates), 200

@bpCoordinates.route('/coordinates/input-data', methods=['POST'])
def create_coord():
    data = request.get_json()

    new_coord = Coordinates(
        latitude=data['latitude'],
        longitude=data['longitude'],
        imageurl=data['imageurl'],
        state=data['state'],
    )

    db.session.add(new_coord)
    db.session.commit()

    return jsonify({'message': 'New coordinate created!'}), 200


@bpCoordinates.route('/coordinates/<int:id>/update-data', methods=['PUT'])
def update_coord(id):
    data = request.get_json()
    print(data)
    coord = Coordinates.query.filter_by(id=id).first()

    if not coord:
        return jsonify({'message': 'No id found'})

    #user.password = password
    coord.state = data['state']
    db.session.commit()

    return jsonify({'message': 'Estado actualizado'})

@bpCoordinates.route('/coordinates/<int:id>/delete-data', methods=['DELETE'])
def delete_coord(id):

    coord = Coordinates.query.filter_by(id=id).first()

    if not coord:
        return jsonify({'message': 'Id not found'})

    db.session.delete(coord)
    db.session.commit()

    return jsonify({'message': 'The coordinate has been deleted'})


""" 
{   
  u'bytes': 29802,
  u'created_at': u'2017-06-25T17:20:30Z',
  u'format': u'jpg',
  u'height': 282,
  u'public_id': u'hl22acprlomnycgiudor',
  u'resource_type': u'image',
  u'secure_url': u'https://res.cloudinary.com/demo/image/upload/v1571218039/hl22acprlomnycgiudor.jpg',
  u'signature': u'10594f028dbc23e920fd084f8482394798edbc68',
  u'type': u'upload',
  u'url': u'http://res.cloudinary.com/demo/image/upload/v1571218039/hl22acprlomnycgiudor.jpg',
  u'version': 1571218039,
  u'width': 292
}
"""