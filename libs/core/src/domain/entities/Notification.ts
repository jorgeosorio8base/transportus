
          import { INotificationEntity,  } from './interfaces';
          import {
            
            Notification as GQLNotification } from '../../definitions/schema';
          

          export class NotificationEntity implements INotificationEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _content?: string;
private readonly _sent_at?: string;


                  constructor(data: GQLNotification | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._content = data?.content || undefined;
this._sent_at = data?.sent_at || undefined;

                  }

                  
                          get Id(): string | undefined {
                              return this._id;
                    }
                      

                          get CreatedAt(): string | undefined {
                              return this._createdAt;
                    }
                      

                          get UpdatedAt(): string | undefined {
                              return this._updatedAt;
                    }
                      

                          get Content(): string | undefined {
                              return this._content;
                    }
                      

                          get SentAt(): string | undefined {
                              return this._sent_at;
                    }
                      

          }
      