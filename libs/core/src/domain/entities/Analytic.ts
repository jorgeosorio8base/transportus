
          import { IAnalyticEntity,  } from './interfaces';
          import {
            
            Analytic as GQLAnalytic } from '../../definitions/schema';
          

          export class AnalyticEntity implements IAnalyticEntity {
                private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _report_name?: string;
private readonly _data?: Record<string, any>;
private readonly _generated_at?: string;

                  constructor(data: GQLAnalytic | null) {
                      this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._report_name = data?.report_name || undefined;
this._data = data?.data || undefined;
this._generated_at = data?.generated_at || undefined;
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
                      

                          get ReportName(): string | undefined {
                              return this._report_name;
                    }
                      

                          get Data(): Record<string, any> | undefined {
                              return this._data;
                    }
                      

                          get GeneratedAt(): string | undefined {
                              return this._generated_at;
                    }
                      
          }
      