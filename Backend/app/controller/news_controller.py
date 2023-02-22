from fastapi import APIRouter, File, UploadFile
from typing import Dict
from ..service import news_service as service
from ..model.elements import News
from bson.objectid import ObjectId

router = APIRouter(
    tags =["News Controler"]
)

@router.get("/news")
def get_news():
    return service.get_news("category")


@router.get("/new")
def get_new(id: str):
    return service.get_new(id)



@router.post("/new")
def add_new(new: News):
    return service.add_new(new)


@router.delete("/new")
def delete_new(id: str):
    return service.delete_new(id)


@router.put("/new")
def update_new(id:str, newval: Dict):
    return service.update_new(id,newval)