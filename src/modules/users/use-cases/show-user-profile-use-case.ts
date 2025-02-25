import { AppError } from '@core/domain/errors/app-error'

import { User } from '@modules/users/entities/user'
import { UsersRepository } from '@modules/users/repositories/user-repository'

interface Input {
  userId: string
}

interface Output {
  user: User
}

export class ShowUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId }: Input): Promise<Output> {
    const user = await this.usersRepository.findById({
      userId,
    })

    if (!user) {
      throw new AppError({
        code: 'user.not_found',
      })
    }

    return {
      user,
    }
  }
}
