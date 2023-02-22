from .db_connect import get_db
from typing import Dict
from bson.objectid import ObjectId
#base CRUD


def get_all_elements(category: str, DB_table:str):
    collection = get_table(DB_table)
    result = collection.find({})
    responseList = []
    for elem in result:
        elem['_id']=str(elem['_id'])
        responseList.append(elem)
    return responseList


def get_element(id: str, DB_table:str):
    collection = get_table(DB_table)
    result = collection.find_one({'_id':ObjectId(id)})
    if result is not None:
        result['_id']=str(result['_id'])
    return result


def add_element(element: Dict, DB_table:str):
    collection = get_table(DB_table)
    result = collection.insert_one(element)
    return {'id': str(result.inserted_id)}


def delete_element(category: str, DB_table:str):
    collection = get_table(DB_table)
    result = collection.delete_one({'category':category})
    return result.deleted_count


def update_element(id:str, newval: Dict, DB_table:str):
    collection = get_table(DB_table)
    query = { "_id": ObjectId(id) }
    setval = { "$set": newval }
    result = collection.update_one(query, setval)
    return result.matched_count


def get_table(DB_table:str):
    db= get_db()
    collection = db[DB_table]
    return collection

TABLE_LIST =[]

def db_drop_all():
    db = get_db()
    print(db.list_collection_names())

def db_create_all():
    pass