import '@fastify/jwt'

import { User } from '@modules/users/entities/user'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      role: 'USER'
      sub: string
      data: User
    }
  }
}
