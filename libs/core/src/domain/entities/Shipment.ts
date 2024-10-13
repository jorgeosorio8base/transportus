
          import { IShipmentEntity,  } from './interfaces';
          import {
            
            Shipment as GQLShipment } from '../../definitions/schema';
          

          export class ShipmentEntity implements IShipmentEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;

private readonly _origin?: string;
private readonly _destination?: string;
private readonly _priority?: string;


                  constructor(data: GQLShipment | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;

this._origin = data?.origin || undefined;
this._destination = data?.destination || undefined;
this._priority = data?.priority || undefined;

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
                      


                          get Origin(): string | undefined {
                              return this._origin;
                    }
                      

                          get Destination(): string | undefined {
                              return this._destination;
                    }
                      

                          get Priority(): string | undefined {
                              return this._priority;
                    }
                      

          }
      