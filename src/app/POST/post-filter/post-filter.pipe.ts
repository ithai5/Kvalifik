import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../../entities/post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {
  transform(posts: Post[], searchInput: string): Post[] {
    console.log("hello there")
    return posts.filter(postElement => postElement.title.toLowerCase().includes(searchInput.toLowerCase())
      || postElement.content.toLowerCase().includes(searchInput.toLowerCase()))
      }
}
