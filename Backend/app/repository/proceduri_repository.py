from pathlib import Path
from typing import Dict
from fastapi.responses import FileResponse
import os
from .utils_db_f import get_all_elements,get_element,add_element,delete_element,update_element

table = 'proceduri'

def get_proceduri(category: str):
    return get_all_elements(category,table)
    

def get_procedura(id: str):
    return get_element(id, table)


def add_procedura(procedura: Dict):
    return add_element(procedura, table)


def update_procedura(id:str, newval: Dict):
    return update_element(id,newval,table)


def delete_procedura(id: str):
    return delete_element(id,table)


def get_file_procedura(id: str):
    file_path= "app/assets/files/"+id+".pdf"
    return FileResponse(path=file_path, filename=file_path, media_type='application/pdf')


def save_procedura(id:str, file: bytes):
    filename = "app/assets/files/"+ id+".pdf"
    path =Path(filename).write_bytes(file)
    return path


def delete_file_procedura(id: str):
    try:
        filename = "app/assets/files/"+ id+".pdf"
        os.remove(filename)
        return "done"
    except:
        raise(Exception) 


def update_file_procedura(id:str, file: bytes):
    filename = "app/assets/files/"+ id+".pdf"
    path =Path(filename).write_bytes(file)
    return path