# Assignment 2 Write Up

 1. What is the function of the following technologies in your assignment:
    1. HTML: the set of markup symbols/codes used to describe the structure and presentation of information of the web pages in this assignment; it allows you to format and display the core content.
    2. CSS: The language used to modify the presentation of the content of the web pages that was created with HTML. 
    3. JavaScript: A scripting language used alongside HTML and CSS; it is what powers the back-end functionality and alters the HTML/CSS in response to user action (like processing and presenting the result of submitting a form).
    4. Python: A high-level programming language that is used in powering the application's server.
    5. Flask: A web framework that uses Python to provide tools, libraries, and technologies needed to host and run the web application.
    6. HTTP: the application protocol that defines how messages are formatted and transmitted, and what actions the server/browser should take in response to various commands (loading a page or submitting a form, for example).
    7. GET and POST requests: A GET request requests data from a specified resource and a POST request submits data to be processed by a specified resource.
 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
 HTML is what creates and structures the core content of the page in the browser; it marks the content up into structural types like paragraphs, headers, images, forms, etc. CSS tells the browser how each element defined by HTML should be displayed. JavaScript tells the browser how to change the web page (including HTML/CSS elements) in response to events that happen, like clicking or submitting forms.
 3. How does Python and Flask work together in the server for this assignment?
 Flask is a framework that utilizes Python to launch and host the server in this assignment. Flask provides a predefined workflow for adding dynamic content, wherein the logic is coded through Python, which allows us to get the server up and define what templates are rendered on different app routes.
 4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

 "GET / HTTP/1.1" - Retrieves the web page for what will load at the root directory "/"
 "GET /index HTTP/1.1" - Retrieves web page for what will load at the index directory "/index"
 "GET /static/css/style.css HTTP/1.1" - Retrieves static CSS stylesheet content
 "GET /static/css/normalize.css HTTP/1.1" - Retrieves static CSS stylesheet content
 "GET /static/css/skeleton.css HTTP/1.1" - Retrieves static CSS stylesheet content
 "GET /static/images/home-picture.jpg HTTP/1.1" - Retrieves image displayed on the page
 "GET /blog/8-experiments-in-motivation HTTP/1.1"  - Retrieves the web page for one of the blog posts
 "GET /static/js/comment_script.js HTTP/1.1" - Retrieves JS script code for web page
 "GET /blog/a-mindful-shift-of-focus HTTP/1.1" - Retrieves the web page for one of the blog posts
 "GET /blog/how-to-develop-an-awesome-sense-of-direction HTTP/1.1" - Retrieves the web page for one of the blog posts
 "GET /blog/training-to-be-a-good-writer HTTP/1.1" - Retrieves the web page for one of the blog posts
 "GET /blog/what-productivity-systems-wont-solve HTTP/1.1" - Retrieves the web page for one of the blog posts
 "GET /about HTTP/1.1" - Retrieves web page for what will load at the about directory "/about"
 "GET /static/images/me.jpg HTTP/1.1" - Retrieves image displayed on the page
 "GET /contact HTTP/1.1" - Retrieves web page for what will load at the contact directory "/contact"
 "GET /static/js/script.js HTTP/1.1" - Retrieves JS script code for contact page
 "POST /contact HTTP/1.1" - Submits data in the form to the server, which then uses Mailgun to send an email with the submitted data



