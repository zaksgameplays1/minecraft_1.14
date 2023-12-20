from flask import Flask, render_template

# Improved By FlamePVP
app = Flask(__name__)

# Define the index route
@app.route('/')
def index():
    return render_template('index.html')

# Check if this script is executed directly and run the app
if __name__ == '__main__':
    app.run(debug=True)
