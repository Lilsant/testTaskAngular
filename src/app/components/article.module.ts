import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent, ArticleComponent],
  exports: [PaginationComponent],
})
export class ArticleModule {}
