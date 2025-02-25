import { FastifyInstance } from 'fastify'

import { showTransaction } from '@modules/transactions/http/controllers/show-transaction-controller'
import { fetchTransactions } from '@modules/transactions/http/controllers/fetch-transactions-controller'
import { createTransaction } from '@modules/transactions/http/controllers/create-transaction-controller'
import { saveTransaction } from '@modules/transactions/http/controllers/save-transaction-controller'
import { removeTransaction } from '@modules/transactions/http/controllers/remove-transaction-controller'

import { verifyJwt } from '@shared/infra/http/middlewares/verify-jwt'

export async function Router(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.get('/transactions/:id', showTransaction)
  app.get('/transactions', fetchTransactions)
  app.post('/transactions', createTransaction)
  app.put('/transactions/:id', saveTransaction)
  app.delete('/transactions/:id', removeTransaction)
}
