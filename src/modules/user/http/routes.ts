import { FastifyInstance } from 'fastify'

import { authenticate } from '@modules/user/http/controllers/authenticate'

import { profile } from '@modules/user/http/controllers/profile'

import { register } from '@modules/user/http/controllers/register'

import { refresh } from '@modules/user/http/controllers/refresh'

import { resetForgotPassword } from '@modules/user/http/controllers/reset-forgot-password'

import { sendForgotPasswordCode } from '@modules/user/http/controllers/send-forgot-password-code'

import { verifyJwt } from '@shared/infra/http/middlewares/verify-jwt'

export async function Router(app: FastifyInstance) {
  app.post('/sessions', authenticate)
  app.get('/token/refresh', refresh)
  app.post('/users', register)
  app.post('/password/forgot', sendForgotPasswordCode)
  app.post('/password/reset', resetForgotPassword)
  app.get('/users/profile', { onRequest: [verifyJwt] }, profile)
}
