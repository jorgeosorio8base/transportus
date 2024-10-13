
          import { IDriverEntity,  } from './interfaces';
          import {
            
            Driver as GQLDriver } from '../../definitions/schema';
          

          export class DriverEntity implements IDriverEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _name?: string;
private readonly _license_number?: string;
private readonly _availability_status?: string;

                  constructor(data: GQLDriver | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._name = data?.name || undefined;
this._license_number = data?.license_number || undefined;
this._availability_status = data?.availability_status || undefined;
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
                      

                          get Name(): string | undefined {
                              return this._name;
                    }
                      

                          get LicenseNumber(): string | undefined {
                              return this._license_number;
                    }
                      

                          get AvailabilityStatus(): string | undefined {
                              return this._availability_status;
                    }
                      
          }
      