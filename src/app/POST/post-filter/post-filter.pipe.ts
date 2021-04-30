import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../../entities/post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {
  transform(postList: Post[], searchInput: string): Post[] {
    console.log("hello there")
    return postList.filter(postElement => postElement.title.toLowerCase().includes(searchInput.toLowerCase())
      || postElement.content.toLowerCase().includes(searchInput.toLowerCase()))
      }
  
}
