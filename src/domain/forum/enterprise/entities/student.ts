import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface IStudentProps {
  name: string
  email: string
  password: string
}

export class Student extends Entity<IStudentProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  static create(props: IStudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
