import { PrismaTransactionsRepository } from '@modules/transactions/repositories/prisma/repositories/transactions-respository'
import { PrismaCategoriesRepository } from '@modules/categories/repositories/prisma/repositories/categories-respository'

import { CreateConciliationUseCase } from '@modules/conciliations/use-cases/create-conciliation-use-case'

export function makeCreateConciliationUseCase() {
  const transactionsRepository = new PrismaTransactionsRepository()
  const categoriesRepository = new PrismaCategoriesRepository()

  return new CreateConciliationUseCase(
    transactionsRepository,
    categoriesRepository,
  )
}
