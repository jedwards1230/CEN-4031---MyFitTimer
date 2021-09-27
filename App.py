from flask import Flask, render_template, request, jsonify
from sqlalchemy import Column, Integer
from sqlalchemy.sql.sqltypes import BIGINT, TIMESTAMP, Date, Time
from data_connection import Session, engine, Base
import json


class Entry(Base):
    # Table name
    __tablename__ = 'times_table'

    # Create columns
    time_idx = Column(Integer, primary_key=True, autoincrement=True)
    start_time = Column(BIGINT)
    stop_time = Column(BIGINT)

    # Initialize object with times
    def __init__(self, sTime, spTime):
        self.start_time = sTime
        self.stop_time = spTime
        # Create table if it does not exist
        engine.execute("CREATE TABLE IF NOT EXISTS times_table (time_idx int, start_time BIGINT, stop_time BIGINT)")


# Start Server
app = Flask("Timer")
app.debug = True
Base.metadata.create_all(engine)

# Serve Main page
@app.route('/')
def index():
    return render_template('index.html')

# POST request directory
@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    # Pull JSON from POST
    jsdata = request.get_json()
    # Create SQL session
    session = Session()
    # Assign times to Entry object
    entry = Entry(jsdata.get('startTime'), jsdata.get('stopTime'))
    # Add entry object to SQL session
    session.add(entry)
    # Delete entry object
    del entry
    # Push entry and close SQL session
    session.commit()
    session.close()

    return jsdata


if __name__ == '__main__':
    app.run()

