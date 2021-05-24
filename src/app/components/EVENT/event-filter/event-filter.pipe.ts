import { Pipe, PipeTransform } from '@angular/core';
import { Event } from 'src/app/entities/event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(event: Event[], searchInput: string): Event[] {
    return event.filter(eventElement => 
      //console.log(eventElement)
      eventElement.title.toLowerCase().includes(searchInput.toLowerCase())) as Event[]
    
  }
}

//|| eventElement.content.toLowerCase().includes(searchInput.toLowerCase())