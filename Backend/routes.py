 #contains the routing of the api's
from flask import Flask, Blueprint, request, jsonify
from app import db
from flask_marshmallow import Marshmallow
from config import Config
from models import db, Hackathon, ChecklistItem, MotivationalQuote, Goal
import random

app = Flask(__name__)
app.config.from_object(Config)
blueprint = Blueprint('routes', __name__)

# Initialize extensions
db.init_app(app)
ma = Marshmallow(app)

# Run before each request
@app.before_first_request
def create_tables():
    db.create_all()

# CRUD API for Hackathon
@app.route('/hackathons', methods=['GET', 'POST', 'PUT', 'DELETE'])
def manage_hackathons():
    if request.method == 'GET':
        hackathons = Hackathon.query.all()
        return jsonify([hackathon.to_dict() for hackathon in hackathons])
    
    elif request.method == 'POST':
        data = request.json
        new_hackathon = Hackathon(name=data['name'], start_date=data['start_date'], end_date=data['end_date'], status=data['status'])
        db.session.add(new_hackathon)
        db.session.commit()
        return jsonify({"message": "Hackathon added!"}), 201
    
    elif request.method == 'PUT':
        data = request.json
        hackathon = Hackathon.query.get(data['id'])
        if not hackathon:
            return jsonify({'error': 'Hackathon not found'}), 404
        hackathon.name = data['name']
        hackathon.start_date = data['start_date']
        hackathon.end_date = data['end_date']
        hackathon.status = data['status']
        db.session.commit()
        return jsonify(hackathon.to_dict())
    
    elif request.method == 'DELETE':
        data = request.json
        hackathon = Hackathon.query.get(data['id'])
        if not hackathon:
            return jsonify({'error': 'Hackathon not found'}), 404
        db.session.delete(hackathon)
        db.session.commit()
        return jsonify({'message': 'Hackathon deleted'}), 200

# Excuses categorized by mood
excuses_by_mood = {
    "cant_come_up_with_ideas": [
        "I was staring at a blank page for hours.",
        "Every idea I had today was worse than the last.",
        "My brain took a creative vacation without me."
    ],
    "feeling_lazy": [
        "I couldn't find the energy to lift my finger to the keyboard.",
        "The couch held me hostage all day.",
        "I was procrastinating with Olympic-level dedication."
    ],
    "tired_burnout": [
        "I've been running on empty for days now.",
        "Burnout hit me like a freight train.",
        "I'm one 'just one more task' away from a total shutdown."
    ],
    "too_much_energy_drink_caffeine": [
        "I was bouncing off the walls, literally.",
        "Caffeine jitters turned typing into a typo marathon.",
        "My hands were moving faster than my brain."
    ],
    "sleep_deprived": [
        "I was dreaming with my eyes open.",
        "Every time I tried to think, I nearly fell asleep.",
        "My brain is running on 2 hours of sleep and a prayer."
    ],
    "random_other": [
        "I was debugging the meaning of life.",
        "My internet decided to take a holiday.",
        "I got lost in the YouTube rabbit hole."
    ]
}

@blueprint.route('/excuse', methods=['GET'])
def excuse():
    mood = request.args.get('mood', 'random_other').lower().replace(" ", "_")
    excuses = excuses_by_mood.get(mood, excuses_by_mood["random_other"])
    return jsonify({'mood': mood, 'excuse': random.choice(excuses)})

# Checklist API
@app.route('/checklist/<int:hackathon_id>', methods=['GET', 'POST', 'PUT'])
def manage_checklist(hackathon_id):
    if request.method == 'GET':
        checklist_items = ChecklistItem.query.filter_by(hackathon_id=hackathon_id).all()
        return jsonify([item.to_dict() for item in checklist_items])
    
    elif request.method == 'POST':
        data = request.json
        new_item = ChecklistItem(hackathon_id=hackathon_id, item=data['item'])
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.to_dict()), 201
    
    elif request.method == 'PUT':
        data = request.json
        item = ChecklistItem.query.get(data['id'])
        if not item:
            return jsonify({'error': 'Checklist item not found'}), 404
        item.completed = data['completed']
        db.session.commit()
        return jsonify(item.to_dict())

# Motivational Quotes API
@app.route('/motivational_quotes', methods=['GET'])
def quotes():
    quotes = [
        "Keep pushing your limits!",
        "Success is no accident.",
        "Hard work beats talent when talent doesn't work hard.",
        "Believe in yourself!"
    ]
    return jsonify({"quote": random.choice(quotes)})

# Goal Setting CRUD API
@app.route('/goals', methods=['GET', 'POST', 'PUT', 'DELETE'])
def manage_goals():
    if request.method == 'GET':
        goals = Goal.query.all()
        return jsonify([goal.to_dict() for goal in goals])
    
    elif request.method == 'POST':
        data = request.json
        new_goal = Goal(title=data['title'], description=data['description'], status=data['status'])
        db.session.add(new_goal)
        db.session.commit()
        return jsonify({"message": "Goal added!"}), 201
    
    elif request.method == 'PUT':
        data = request.json
        goal = Goal.query.get(data['id'])
        if not goal:
            return jsonify({'error': 'Goal not found'}), 404
        goal.description = data['description']
        goal.achieved = data['achieved']
        db.session.commit()
        return jsonify(goal.to_dict())
    
    elif request.method == 'DELETE':
        data = request.json
        goal = Goal.query.get(data['id'])
        if not goal:
            return jsonify({'error': 'Goal not found'}), 404
        db.session.delete(goal)
        db.session.commit()
        return jsonify({'message': 'Goal deleted'}), 200

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
