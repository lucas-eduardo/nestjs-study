import { IUseCaseError } from '@/core/errors/use-case-error'

export class StudentAlreadyExistsError extends Error implements IUseCaseError {
  constructor(identifier: string) {
    super(`Student "${identifier}" already exists.`)
  }
}
