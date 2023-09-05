import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IDomainEvent } from '@/core/events/domain-event'

import { Answer } from '../entities/answer'

export class AnswerCreatedEvent implements IDomainEvent {
  public ocurredAt: Date
  public answer: Answer

  constructor(answer: Answer) {
    this.answer = answer
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
