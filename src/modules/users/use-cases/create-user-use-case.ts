import { AppError } from '@core/domain/errors/app-error'

import { User, UserRole } from '@modules/users/entities/user'
import { UsersRepository } from '@modules/users/repositories/user-repository'
import { Setting } from '@modules/settings/entities/setting'

import { Hash } from '@shared/infra/providers/hash'
import { settingsOptions } from '@shared/infra/database/data'

interface Input {
  name: string
  document: string
  email: string
  birthDate: Date
  phone: string
  password: string
}

export class CreateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly hash: Hash,
  ) {}

  async execute({
    name,
    document,
    password,
    email,
    phone,
    birthDate,
  }: Input): Promise<void> {
    const [documentExists, emailExists, phoneExists] = await Promise.all([
      this.usersRepository.findByDocument(document),
      this.usersRepository.findByEmail(email),
      this.usersRepository.findByPhone(phone),
    ])

    if (documentExists)
      throw new AppError({
        code: 'document.already_exists',
      })

    if (emailExists)
      throw new AppError({
        code: 'email.already_exists',
      })

    if (phoneExists)
      throw new AppError({
        code: 'phone.already_exists',
      })

    if (!password)
      throw new AppError({
        code: 'password.required',
      })

    const passwordHashed = await this.hash.generate(password)

    const user = User.create({
      name,
      document,
      email,
      phone,
      password: passwordHashed,
      birthDate,
      role: UserRole.USER,
      status: 'active',
    })

    user.settings = settingsOptions.map((option) => {
      return Setting.create({
        userId: user.id,
        fieldName: option.fieldName,
        isFieldEnable: option.isFieldEnable,
        isFieldRequired: option.isFieldRequired,
        title: option.title,
        description: option.description,
      })
    })

    await this.usersRepository.create(user)
  }
}
