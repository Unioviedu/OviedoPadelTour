import RankingDTO from '@/api/dto/RankingDTO'

export default class PlayerRanking {
  readonly name: string
  readonly surname: string
  readonly numMatchesWins: number
  readonly numMatchesLost: number
  readonly numMatches: number
  readonly percetageWins: number

  constructor (rankingDTO: RankingDTO) {
    this.name = rankingDTO.Nombre
    this.surname = ''
    this.numMatchesWins = Number(rankingDTO.Ganados)
    this.numMatchesLost = Number(rankingDTO.Perdidos)
    this.numMatches = this.numMatchesWins + this.numMatchesLost
    this.percetageWins = this.calculatePercentageWins(this.numMatchesWins, this.numMatchesLost)
  }

  private calculatePercentageWins (numMatchesWins: number, numMatchesLost: number): number {
    const percentage = numMatchesWins / (numMatchesWins + numMatchesLost) * 100
    return Math.round(percentage)
  }
}
