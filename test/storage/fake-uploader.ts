import {
  IUploadParams,
  Uploader,
} from '@/domain/forum/application/storage/uploader'
import { randomUUID } from 'crypto'

interface IUpload {
  fileName: string
  url: string
}

export class FakeUploader implements Uploader {
  public uploads: IUpload[] = []

  async upload({ fileName }: IUploadParams): Promise<{ url: string }> {
    const url = randomUUID()

    this.uploads.push({
      fileName,
      url,
    })

    return { url }
  }
}
