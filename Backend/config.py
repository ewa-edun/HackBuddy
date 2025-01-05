# contains main configurations of HackBuddy

class Config:
    # Database configuration
    SQLALCHEMY_DATABASE_URI = 'sqlite:///hackbuddy.db'  # SQLite for simplicity
    SQLALCHEMY_TRACK_MODIFICATIONS = False
