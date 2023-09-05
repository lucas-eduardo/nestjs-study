import { IQuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionAttachmentsRepository
  implements IQuestionAttachmentsRepository
{
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]> {
    throw new Error('Method not implemented.')
  }

  deleteManyByQuestionId(questionId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
