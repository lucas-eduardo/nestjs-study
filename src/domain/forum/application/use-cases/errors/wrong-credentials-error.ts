import { IUseCaseError } from '@/core/errors/use-case-error'

export class WrongCredentialsError extends Error implements IUseCaseError {
  constructor() {
    super(`Credentials are not valid.`)
  }
}
