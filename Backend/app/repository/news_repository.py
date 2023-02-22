from pathlib import Path
from typing import Dict
from fastapi.responses import FileResponse
import os
from .utils_db_f import get_all_elements,get_element,add_element,delete_element,update_element

table = 'news'

def get_news(category: str):
    return get_all_elements(category,table)
    

def get_new(id: str):
    return get_element(id, table)


def add_new(new: Dict):
    return add_element(new, table)


def update_new(id:str, newval: Dict):
    return update_element(id,newval,table)


def delete_new(id: str):
    return delete_element(id,table)
