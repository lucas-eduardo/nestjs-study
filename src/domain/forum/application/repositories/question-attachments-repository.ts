import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface IQuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
  deleteManyByQuestionId(questionId: string): Promise<void>
}
