from flask import Blueprint, request, jsonify
from models import Hackathon, ChecklistItem, MotivationalQuote, Goal
from app import db
import random

def init_routes(app):
    # CRUD API for Hackathon
    @app.route('/hackathons', methods=['GET', 'POST', 'PUT', 'DELETE'])
    def manage_hackathons():
        if request.method == 'GET':
            hackathons = Hackathon.query.all()
            return jsonify([hackathon.to_dict() for hackathon in hackathons])
        
        elif request.method == 'POST':
            data = request.json
            new_hackathon = Hackathon(
                name=data['name'],
                start_date=data['start_date'],
                end_date=data['end_date'],
                status=data['status']
            )
            db.session.add(new_hackathon)
            db.session.commit()
            return jsonify(new_hackathon.to_dict()), 201
        
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

    # Excuses with motivational messages
    excuses_by_mood = {
        "cant_come_up_with_ideas": {
            "excuses": [
                "I was staring at a blank page for hours.",
                "Every idea I had today was worse than the last.",
                "My brain took a creative vacation without me."
            ],
            "motivation": [
                "Remember, even bad ideas can lead to great ones!",
                "Take a short break and come back with fresh eyes.",
                "Start small - even tiny ideas can grow into something amazing!"
            ]
        },
        "feeling_lazy": {
            "excuses": [
                "The couch held me hostage all day.",
                "I was procrastinating with Olympic-level dedication.",
                "My motivation went on vacation without leaving a forwarding address."
            ],
            "motivation": [
                "Start with just 5 minutes - you'll be surprised what you can do!",
                "Remember why you started this journey!",
                "Small progress is still progress!"
            ]
        },
        "tired_burnout": {
            "excuses": [
                "I've been running on empty for days now.",
                "Burnout hit me like a freight train.",
                "My brain is officially on strike."
            ],
            "motivation": [
                "Take care of yourself first - rest if you need to!",
                "Remember to celebrate how far you've come!",
                "It's okay to take breaks - they make you stronger!"
            ]
        }
    }

    @app.route('/excuse', methods=['GET'])
    def excuse():
        mood = request.args.get('mood', 'random_other').lower().replace(" ", "_")
        mood_data = excuses_by_mood.get(mood)
        if not mood_data:
            return jsonify({'error': 'Mood not found'}), 404
        
        return jsonify({
            'mood': mood,
            'excuse': random.choice(mood_data['excuses']),
            'motivation': random.choice(mood_data['motivation'])
        })

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
            "The only way to do great work is to love what you do.",
            "Innovation distinguishes between a leader and a follower.",
            "Stay hungry, stay foolish.",
            "Code your dreams into reality.",
            "Every expert was once a beginner.",
            "Done is better than perfect.",
            "Make it work, make it right, make it fast.",
            "The best error message is the one that never shows up."
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
            new_goal = Goal(
                title=data['title'],
                description=data['description']
            )
            db.session.add(new_goal)
            db.session.commit()
            return jsonify(new_goal.to_dict()), 201
        
        elif request.method == 'PUT':
            data = request.json
            goal = Goal.query.get(data['id'])
            if not goal:
                return jsonify({'error': 'Goal not found'}), 404
            goal.title = data.get('title', goal.title)
            goal.description = data.get('description', goal.description)
            goal.achieved = data.get('achieved', goal.achieved)
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
