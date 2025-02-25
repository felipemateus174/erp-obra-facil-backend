import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

import { makeCreateConciliationUseCase } from '@modules/conciliations/use-cases/factories/make-create-conciliation-factory'
import { MultipartFile } from '@fastify/multipart'

export async function createConciliationController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    if (!request.isMultipart()) {
      return reply.status(400).send({ error: 'Request is not multipart' })
    }

    const data = (await request.file({
      limits: { fileSize: 41943040 }, // 40 MB
    })) as MultipartFile

    const createConciliationUseCase = makeCreateConciliationUseCase()

    await createConciliationUseCase.execute({
      user: request.user.data,
      file: data,
    })

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof ZodError) {
      return reply.status(400).send({ error: error.errors })
    }
    return reply.status(500).send({ error: 'Error processing file upload' })
  }
}
