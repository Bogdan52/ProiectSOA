from pymongo import MongoClient
import os



def get_db():
    conn_str =os.environ["DB_CONN_STRING"]
    client = MongoClient(conn_str)
    return client['interapp']