import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

import { Comment, ICommentProps } from './comment'

export interface IAnswerCommentProps extends ICommentProps {
  answerId: UniqueEntityID
}

export class AnswerComment extends Comment<IAnswerCommentProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<IAnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return answerComment
  }
}
