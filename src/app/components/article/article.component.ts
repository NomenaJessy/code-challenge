import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any[] = [];
  originalArticles: any[] = [];
  searchTerm: string = "";

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  searchArticles() {
    if (this.searchTerm.trim() === "") {
      this.articles = [...this.originalArticles];
    } else {
      this.articles = this.originalArticles.filter((article: any) =>
        article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.byline.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.section.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  getArticles() {
    this.data.getArticles().subscribe((result: any) => {
      if (result['status'] === 'OK') {
        this.articles = result["results"];
        this.originalArticles = [...this.articles];
        console.log(this.originalArticles);
      }
    });
  }

}
