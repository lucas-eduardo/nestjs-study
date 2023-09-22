export interface IUploadParams {
  fileName: string
  fileType: string
  body: Buffer
}

export abstract class Uploader {
  abstract upload(params: IUploadParams): Promise<{ url: string }>
}
