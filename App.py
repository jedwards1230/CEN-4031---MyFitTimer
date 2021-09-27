from flask import Flask, render_template, request
from sqlalchemy import Column, Integer, ARRAY
from sqlalchemy.sql.sqltypes import BIGINT
from data_connection import Session, engine, Base


class Entry(Base):
    __tablename__ = 'times_table'

    # Column to index and keep track of entries
    id = Column(Integer, primary_key=True)
    # Column to store BigInt array [startTime, endTime]
    # BigInt due to size of getTime() in js
    timeArr = Column(ARRAY(BIGINT))

    def __init__(self):
        self.timeArr = []
        engine.execute("CREATE TABLE IF NOT EXISTS times_table (id int, timeArr bigint[])")  

    def clear(self):
        self.timeArr = []


# Start Server
app = Flask("Timer")
app.debug = True

# Serve Main page
@app.route('/')
def index():
    return render_template('index.html')

# POST request directory
@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    # For simple datastream
    # jsdata = request.form['javascript_data']
    # For JSON object
    jsdata = request.json['javascript_data']

    return jsdata


if __name__ == '__main__':
    app.run()

