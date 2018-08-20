# from flask_assets import Bundle, Environment

from flask import Flask, request, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from flask_login import LoginManager, current_user, UserMixin
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from wtforms import StringField, PasswordField, BooleanField

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
app.debug = True


#set up database:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://matthewsteele:valueurtime@localhost/endogen'
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SECRET_KEY'] = 'valueurtime'

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

class MyModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True)


    def __init__(self, email):
        self.username = username


    def __repr__(self):
        return '<User %r>' % self.username

class LoginForm(FlaskForm):
    email = StringField('email')
    password = PasswordField('password')


admin = Admin(app)
admin.add_view(MyModelView(User, db.session))

#
# @login.user_loader
# def load_user(user_id):
#     return User.query.get(user_id)


#
# @login_manager.user_loader
# def load_user(user_id):
#     return User.get(user_id)
#
# @app.route("/")
# def index(user=None):
#     return render_template("index.html", user=user)


# @app.route("/post_user", methods=['POST'])
# def index(user=None):
#     return render_template("index.html", user=user)

@app.route("/", methods=['GET', 'POST'])
def mainPage():
    form = LoginForm()

    # print(form.email)
    # print("trying to print")
    # put in conditional statement
    # if #no user
    #     user = User(request.form['textInput'])
    #     db.session.add(user)
    #     db.session.commit()
    return render_template("index.html", form=form)




if __name__ == "__main__":
    app.run(debug=True)
