import { UniqueEntityID } from '../entities/unique-entity-id'

export interface IDomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueEntityID
}
