import {Organization} from './organization';
import {WebActivity} from './web-activity';

export class Event extends WebActivity{
  id: any;
  testingString: String;
  //startDate: Date;
  //endDate: Date;
  //location: string;
  //eventSchedule?: string[]; /*reconsider creating an object for that*/
  //collaboration: Organization[];
}
