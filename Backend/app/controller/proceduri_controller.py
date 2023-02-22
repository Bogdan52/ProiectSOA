from fastapi import APIRouter, File, UploadFile
from typing import Dict
from ..service import proceduri_service as service
from ..model.elements import Procedura
from bson.objectid import ObjectId

router = APIRouter(
    tags =["Proceduri Controler"]
)

@router.get("/proceduri")
def get_proceduri():
    return service.get_proceduri('category')


@router.get("/procedura")
def get_procedura(id: str):
    return service.get_procedura(id)



@router.post("/procedura")
def add_procedura(procedura: Procedura):
    return service.add_procedura(procedura)


@router.delete("/procedura")
def delete_procedura(id: str):
    return service.delete_procedura(id)


@router.put("/procedura")
def update_procedura(id:str, newval: Dict):
    return service.update_procedura(id,newval)


@router.get("/file_procedura")
def get_file_procedura(id: str):
    return service.get_file_procedura(id)


@router.post("/save_procedura")
async def save_procedura(id:str, file: bytes = File()):
    return service.save_procedura(id, file)


@router.delete("/file_procedura")
def delete_file_procedura(id: str):
    return service.delete_file_procedura(id)



@router.put("/file_procedura")
def update_file_procedura(id:str, file: bytes = File()):
    return service.update_file_procedura(id,file)