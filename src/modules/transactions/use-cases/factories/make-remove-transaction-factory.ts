import { PrismaTransactionsRepository } from '@modules/transactions/repositories/prisma/repositories/transactions-respository'

import { RemoveTransactionUseCase } from '@modules/transactions/use-cases/remove-transaction-use-case'

export function makeRemoveTransactionUseCase() {
  const transactionsRepository = new PrismaTransactionsRepository()

  return new RemoveTransactionUseCase(transactionsRepository)
}
