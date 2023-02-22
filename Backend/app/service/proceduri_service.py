from ..repository import proceduri_repository as repository
from ..model.elements import Procedura
from fastapi import UploadFile
from bson.objectid import ObjectId
from typing import Dict

def get_proceduri(category: str):
    return repository.get_proceduri(category)

 
def get_procedura(id: str):
    return repository.get_procedura(id)


def add_procedura(procedura: Procedura):
    return repository.add_procedura(dict(procedura))


def delete_procedura(id: str):
    return repository.delete_procedura(id)


def update_procedura(id:str, newval: Dict):
    return repository.update_procedura(id,newval)


def get_file_procedura(id: str):
    return repository.get_file_procedura(id)


def save_procedura(id:str, file: bytes):
    return repository.save_procedura(id, file)


def delete_file_procedura(id: str):
    return repository.delete_file_procedura(id)


def update_file_procedura(id:str, file: bytes):
    return repository.update_file_procedura(id, file)