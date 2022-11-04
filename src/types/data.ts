export interface Product {
  id: string
  name: string
  price: {
    min?: number
    max?: number
    just?: number
  }
}
