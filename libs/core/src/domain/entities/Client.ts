
          import { IClientEntity,  } from './interfaces';
          import {
            
            Client as GQLClient } from '../../definitions/schema';
          

          export class ClientEntity implements IClientEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _company_name?: string;
private readonly _primary_contact?: string;
private readonly _address?: string;
private readonly _phone_number?: string;
private readonly _email?: string;
private readonly _preferred_shipping_methods?: string;
private readonly _special_handling_instructions?: string;


                  constructor(data: GQLClient | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._company_name = data?.company_name || undefined;
this._primary_contact = data?.primary_contact || undefined;
this._address = data?.address || undefined;
this._phone_number = data?.phone_number || undefined;
this._email = data?.email || undefined;
this._preferred_shipping_methods = data?.preferred_shipping_methods || undefined;
this._special_handling_instructions = data?.special_handling_instructions || undefined;

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
                      

                          get CompanyName(): string | undefined {
                              return this._company_name;
                    }
                      

                          get PrimaryContact(): string | undefined {
                              return this._primary_contact;
                    }
                      

                          get Address(): string | undefined {
                              return this._address;
                    }
                      

                          get PhoneNumber(): string | undefined {
                              return this._phone_number;
                    }
                      

                          get Email(): string | undefined {
                              return this._email;
                    }
                      

                          get PreferredShippingMethods(): string | undefined {
                              return this._preferred_shipping_methods;
                    }
                      

                          get SpecialHandlingInstructions(): string | undefined {
                              return this._special_handling_instructions;
                    }
                      

          }
      