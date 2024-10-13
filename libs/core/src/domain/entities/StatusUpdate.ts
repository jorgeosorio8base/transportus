
          import { IStatusUpdateEntity,  } from './interfaces';
          import {
            
            StatusUpdate as GQLStatusUpdate } from '../../definitions/schema';
          

          export class StatusUpdateEntity implements IStatusUpdateEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _status?: string;
private readonly _timestamp?: string;


                  constructor(data: GQLStatusUpdate | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._status = data?.status || undefined;
this._timestamp = data?.timestamp || undefined;

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
                      

                          get Status(): string | undefined {
                              return this._status;
                    }
                      

                          get Timestamp(): string | undefined {
                              return this._timestamp;
                    }
                      

          }
      