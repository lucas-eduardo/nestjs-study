import { IUseCaseError } from '@/core/errors/use-case-error'

export class InvalidAttachmentTypeError extends Error implements IUseCaseError {
  constructor(type: string) {
    super(`File type "${type}" is not valid.`)
  }
}
