from flask import Flask, request, render_template
# from flask_assets import Bundle, Environment

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
# js = Bundle('index.js', output='gen/main.js')
#
# assets = Environment(app)

# app.config['TEMPLATES_AUTO_RELOAD'] = True


@app.route("/")
def index(user=None):
    return render_template("index.html", user=user)



if __name__ == "__main__":
    app.run(debug=True)
