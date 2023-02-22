from datetime import datetime
from typing import Optional, Any
from pydantic import BaseModel


class Procedura(BaseModel):
    name : str
    thumbnail_type: str
    type : str
    text : str
    category : str


class News(BaseModel):
    titlu : str
    name: str
    content : str
    data : datetime
    img_location : str
    category : str