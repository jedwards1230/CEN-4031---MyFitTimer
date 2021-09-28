from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

db_type = 'postgresql'
db_user = 'usr'
db_pass = 'pass'
db_ip = '192.168.1.120'
db_port = '5432'
db_name = 'my_fit_timer_db'

engine = create_engine(f'{db_type}://{db_user}:{db_pass}@{db_ip}:{db_port}/{db_name}')
Session = sessionmaker(bind=engine)

Base = declarative_base()