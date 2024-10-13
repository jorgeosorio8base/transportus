
              import { File as GQLFile} from '../../definitions/schema';
              import { IFileEntity } from './interfaces';

              export class FileEntity implements IFileEntity {
                  private readonly _id: string;
                  private readonly _downloadUrl: string;

                  constructor(file?: GQLFile) {
                      this._id = file?.id || '';
                      this._downloadUrl = file?.downloadUrl || '';
                  }

                  get Id(): string {
                      return this._id;
                  }

                  get DownloadUrl(): string {
                      return this._downloadUrl;
                  }
              }
            