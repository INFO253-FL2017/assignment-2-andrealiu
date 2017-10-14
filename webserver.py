"""
webserver.py

File that is the central location of code for your webserver.
"""
import requests
import os
from flask import Flask, render_template, request

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def render_home():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/index')
def render_index():
    return render_template("index.html") 

@app.route('/about')
def render_about():
    return render_template("about_us.html") 

@app.route('/contact', methods=['GET'])
def render_contact():
    print("first")
    return render_template("contact_us.html", notifications=[]) 

@app.route('/contact', methods=['POST'])
def send_email():
    message = request.form.get("message")
    name = request.form.get("name")
    subject = request.form.get("subject")
    fields = request.form
    print("FIELDS", fields)
    missing = []
    notifications = []
    error_msg = "Error: Please fill in the following fields: "
    for field in fields:
        if fields[field] == '':
            missing.append(field)
    # if len(missing) > 0:
    #     notifications.append(error_msg + ", ".join(missing))
    # else:
    if len(missing) == 0:
        data = {
            'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
            'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
            'subject': subject,
            'text': message,
        }
        auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

        r = requests.post(
            'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
            auth=auth,
            data=data)

        if r.status_code == requests.codes.ok:
            notifications.append("Hi " + name + ", your email was sent!")
        else:
            notifications.append("Hi " + name + ", your email was not sent. Please try again later.")

    return render_template("contact_us.html", notifications=notifications)

@app.route('/blog/8-experiments-in-motivation')
def render_blog1():
    return render_template("8_experiments_in_motivation.html") 

@app.route('/blog/a-mindful-shift-of-focus')
def render_blog2():
    return render_template("a_mindful_shift_of_focus.html") 

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def render_blog3():
    return render_template("how_to_develop_direction.html") 

@app.route('/blog/training-to-be-a-good-writer')
def render_blog4():
    return render_template("training_to_be_writer.html") 

@app.route('/blog/what-productivity-systems-wont-solve')
def render_blog5():
    return render_template("productivity_systems.html") 

