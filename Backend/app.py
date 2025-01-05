# Entry point for the backend server. Handles app initialization and routing configuration.

from flask import Flask
from config import Config
from routes import api_blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Register blueprint
app.register_blueprint(api_blueprint)

if __name__ == "__main__":
    app.run(debug=True)