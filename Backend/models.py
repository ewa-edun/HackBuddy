from config import Config
from flask_sqlalchemy import SQLAlchemy
from app import db

db = SQLAlchemy()

# Hackathon model
class Hackathon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), nullable=False, default='upcoming')

    def __repr__(self):
        return f'<Hackathon {self.name}>'

# Checklist model for hackathons
class ChecklistItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hackathon_id = db.Column(db.Integer, db.ForeignKey('hackathon.id'), nullable=False)
    item = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<ChecklistItem {self.item} completed={self.completed}>'
    
# Motivational Quotes Model
class MotivationalQuote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quote = db.Column(db.String(255), nullable=False)

# Goal model for goal setting
class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    achieved = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Goal {self.description} achieved={self.achieved}>'
