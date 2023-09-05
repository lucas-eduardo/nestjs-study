import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'

export interface IAnswerAttachmentsRepository {
  findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]>
  deleteManyByAnswerId(answerId: string): Promise<void>
}
