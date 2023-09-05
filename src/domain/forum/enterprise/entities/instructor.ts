import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface IInstructorProps {
  name: string
}

export class Instructor extends Entity<IInstructorProps> {
  static create(props: IInstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
