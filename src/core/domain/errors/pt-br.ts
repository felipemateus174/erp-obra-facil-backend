export const StatusCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,

  INTERNAL_SERVER_ERROR: 500,

  APP_INTERNAL: 500,
}

export const errors = {
  internal: {
    error: '',
    message: '',
    status: StatusCode.APP_INTERNAL,
  },

  'authenticate.invalid_credentials': {
    error: 'Invalid credentials!',
    message:
      'Credenciais incorretas. Por favor, tente novamente com o documento e senha corretos.',
    status: StatusCode.BAD_REQUEST,
  },

  'document.invalid': {
    error: 'Invalid document!',
    message: 'O número do documento é inválido.',
    status: StatusCode.BAD_REQUEST,
  },

  'document.invalid_digits': {
    error: 'Document invalid digits!',
    message: 'O CNPJ informado deve conter apenas dígitos numéricos.',
    status: StatusCode.BAD_REQUEST,
  },

  'document.invalid_length': {
    error: 'Document invalid length!',
    message: 'O CNPJ informado deve conter 14 dígitos.',
    status: StatusCode.BAD_REQUEST,
  },

  'document.already_exists': {
    error: 'document already exists!',
    message: 'O CPF informado já está registrado no sistema.',
    status: StatusCode.BAD_REQUEST,
  },

  'user.not_found': {
    error: 'User not found!',
    message: 'O usuário solicitado não foi encontrado.',
    status: StatusCode.BAD_REQUEST,
  },

  'phone.not_found': {
    error: 'Phone not found!',
    message: 'O telefone solicitado não foi encontrado.',
    status: StatusCode.BAD_REQUEST,
  },

  'phone.already_exists': {
    error: 'Phone already exists!',
    message: 'O telefone informado já está registrado no sistema.',
    status: StatusCode.BAD_REQUEST,
  },

  'email.already_exists': {
    error: 'Email already exists!',
    message: 'O email informado já está registrado no sistema.',
    status: StatusCode.BAD_REQUEST,
  },

  'email.not_found': {
    error: 'Email not found!',
    message: 'O email solicitado não foi encontrado.',
    status: StatusCode.BAD_REQUEST,
  },

  'email.invalid': {
    error: 'Invalid email!',
    message: 'O email fornecido é inválido.',
    status: StatusCode.BAD_REQUEST,
  },

  'token.already_used': {
    error: 'Token already used!',
    message: 'O token fornecido já foi utilizado.',
    status: StatusCode.BAD_REQUEST,
  },

  'token.invalid': {
    error: 'Invalid token!',
    message: 'O token fornecido é inválido.',
    status: StatusCode.BAD_REQUEST,
  },

  'token.expired': {
    error: 'Expired token!',
    message: 'O token fornecido se encontra expirado.',
    status: StatusCode.BAD_REQUEST,
  },

  'token.not_found': {
    error: 'Token not found!',
    message: 'O token solicitado não foi encontrado.',
    status: StatusCode.BAD_REQUEST,
  },

  'confirmation_code.invalid': {
    error: 'Invalid confirmationCode!',
    message: 'O código de confirmação fornecido é inválido.',
    status: StatusCode.BAD_REQUEST,
  },

  'password.required': {
    error: 'Password required!',
    message: 'O campo senha é obrigatório.',
    status: StatusCode.BAD_REQUEST,
  },

  'file.not_found': {
    error: 'File not found!',
    message: 'O arquivo solicitado não foi encontrado.',
    status: StatusCode.BAD_REQUEST,
  },
}

export type ErrorKeys = keyof typeof errors
