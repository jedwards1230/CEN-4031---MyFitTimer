from flask import Flask, render_template, request
from sqlalchemy import Column, Integer
from sqlalchemy.sql.sqltypes import BIGINT
from data_connection import Session, engine, Base


class Entry(Base):
    # Table name
    __tablename__ = 'times_table'

    # Create columns
    time_idx = Column(Integer, 
                        primary_key=True, 
                        autoincrement=True)
    start_time = Column(BIGINT, 
                        nullable=False)
    stop_time = Column(BIGINT, 
                        nullable=False)

    # Initialize object with times
    def __init__(self, sTime, spTime):
        self.start_time = sTime
        self.stop_time = spTime
        # Create table if it does not exist
        engine.execute("CREATE TABLE IF NOT EXISTS times_table (time_idx int, start_time BIGINT, stop_time BIGINT)")

# Create SQL tables
Base.metadata.create_all(engine)

# Start Server
app = Flask("Timer")
app.debug = True

# Pull historic data from db
# Returns list of all recorded times
def grab_history():
    # Create SQL session
    session = Session()

    # Query all rows from db
    times = session.query(Entry).all()
    session.close()

    # Assign times to list
    all_times = [{'startTime':time.start_time,
                    'stopTime':time.stop_time} 
                    for time in times]

    # Return list object of historic times
    return all_times

# Serve Main page
@app.route('/')
def index():
    # Grabs historic times
    data = grab_history()
    # Passes data to index.html
    return render_template('index.html', data=data)

# POST request directory
@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    # Pull JSON from POST
    jsdata = request.get_json()
    # Verify data comes as positive integers
    if jsdata.get('startTime') > 0 and jsdata.get('stopTime') > 0:
        # Create SQL session
        session = Session()
        # Assign times to Entry object
        entry = Entry(jsdata.get('startTime'), 
                        jsdata.get('stopTime'))
        # Add entry object to SQL session
        session.add(entry)
        # Delete entry object
        del entry
        # Push entry and close SQL session
        session.commit()
        session.close()

    return '/'


if __name__ == '__main__':
    app.run()

