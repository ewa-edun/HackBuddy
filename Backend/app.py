from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from config import Config

# Initialize Flask app
app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

# Create the database tables
with app.app_context():
    db.create_all()

# Import routes after db initialization
from routes import init_routes
init_routes(app)

if __name__ == "__main__":
    app.run(debug=True, port=5000)