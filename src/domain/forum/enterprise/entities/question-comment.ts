import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

import { Comment, ICommentProps } from './comment'

export interface IQuestionCommentProps extends ICommentProps {
  questionId: UniqueEntityID
}

export class QuestionComment extends Comment<IQuestionCommentProps> {
  get questionId() {
    return this.props.questionId
  }

  static create(
    props: Optional<IQuestionCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return questionComment
  }
}
