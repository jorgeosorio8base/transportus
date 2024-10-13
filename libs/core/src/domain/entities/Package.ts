
          import { IPackageEntity,  } from './interfaces';
          import {
            
            Package as GQLPackage } from '../../definitions/schema';
          

          export class PackageEntity implements IPackageEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _tracking_number?: string;
private readonly _status?: string;
private readonly _location?: string;



                  constructor(data: GQLPackage | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._tracking_number = data?.tracking_number || undefined;
this._status = data?.status || undefined;
this._location = data?.location || undefined;


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
                      

                          get TrackingNumber(): string | undefined {
                              return this._tracking_number;
                    }
                      

                          get Status(): string | undefined {
                              return this._status;
                    }
                      

                          get Location(): string | undefined {
                              return this._location;
                    }
                      


          }
      