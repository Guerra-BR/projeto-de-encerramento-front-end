class RestauranteClass {
  nome: string
  imagem: string
  avaliacao: number
  infos: string[]
  descricao: string
  id: number
  to: string
  constructor(
    nome: string,
    avaliacao: number,
    infos: string[],
    imagem: string,
    descricao: string,
    id: number,
    to: string
  ) {
    this.imagem = imagem
    this.to = to
    this.nome = nome
    this.avaliacao = avaliacao
    this.infos = infos
    this.descricao = descricao
    this.id = id
  }
}

export default RestauranteClass
