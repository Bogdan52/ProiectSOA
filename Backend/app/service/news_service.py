from ..repository import news_repository as repository
from ..model.elements import News
from typing import Dict

def get_news(category: str):
    return repository.get_news(category)

 
def get_new(id: str):
    return repository.get_new(id)


def add_new(new: News):
    return repository.add_new(dict(new))


def delete_new(id: str):
    return repository.delete_new(id)


def update_new(id:str, newval: Dict):
    return repository.update_new(id,newval)
