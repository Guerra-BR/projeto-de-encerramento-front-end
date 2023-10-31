class RestauranteClass {
  nome: string
  imagem: string
  avaliacao: number
  infos: string[]
  descricao: string
  id: number

  constructor(
    nome: string,
    avaliacao: number,
    infos: string[],
    imagem: string,
    descricao: string,
    id: number
  ) {
    this.imagem = imagem
    this.nome = nome
    this.avaliacao = avaliacao
    this.infos = infos
    this.descricao = descricao
    this.id = id
  }
}

export default RestauranteClass
