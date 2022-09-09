export type reviewsType = {
  id: number
  name: string
  email: string
  body: string
}

export type ratingType = {
  rate: number
  count: number
}

export type productsType = {
  id: number
  title: string
  image: string
  price: number
  category: string
  description: string
  rating: ratingType
}
