import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  QuestionComment,
  IQuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'
import { faker } from '@faker-js/faker'

export function makeQuestionComment(
  override: Partial<IQuestionCommentProps> = {},
  id?: UniqueEntityID,
) {
  const question = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}
