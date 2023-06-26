export interface EthersError {
  reason?: string
  code?: string | number
  error?: EthersError
  transaction?: Transaction
  tx?: Tx
  method?: string
  body?: string
  requestBody?: string
  requestMethod: string
  url?: string
  data?: Data
}


export interface Transaction {
  from: string
  maxPriorityFeePerGas: MaxPriorityFeePerGas
  maxFeePerGas: MaxFeePerGas
  to: string
  data: string
  type: number
  accessList: any
}

export interface MaxPriorityFeePerGas {
  type: string
  hex: string
}

export interface MaxFeePerGas {
  type: string
  hex: string
}


export interface Data {
  message: string
  data: string
}

export interface Tx {
  data: string
  to: To
  from: string
  type: number
  maxFeePerGas: MaxFeePerGas2
  maxPriorityFeePerGas: MaxPriorityFeePerGas2
  nonce: Nonce
  gasLimit: GasLimit
  chainId: ChainId
}

export interface To {
  address?: string
}

export interface MaxFeePerGas2 {
  type: string
  hex: string
}

export interface MaxPriorityFeePerGas2 {
  type: string
  hex: string
}

export interface Nonce {}

export interface GasLimit {}

export interface ChainId {}
