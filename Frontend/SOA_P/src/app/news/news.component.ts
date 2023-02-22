import { Component, OnInit } from '@angular/core';

import { NewsService } from './news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news!: News[]

  constructor(
    public newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.showNews()
  }

  showNews() {
    return this.newsService.getNews().subscribe((req: News[]) => this.news = req);
    
  }
}
