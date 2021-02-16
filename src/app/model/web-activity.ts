export class WebActivity{
  title: string;
  content: string;
  media: string [];
  status: string; /* is published, draft, past consider using enum*/
  /** lastModified: Date; not sure if needed */
  createdDate: Date;
  collection: object []; /*might be that the post dont need to hold this info*/
  isPinned: boolean;
  responsible: string []; /*represent owner of the post*/
}
