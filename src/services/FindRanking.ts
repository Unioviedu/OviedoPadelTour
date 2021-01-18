import RankingDTO from '@/api/dto/RankingDTO'
import PadelRepository from '@/api/PadelRepositoryMock'
import PlayerRanking from './model/PlayerRanking'

export default class FindRanking {
  // eslint-disable-next-line no-useless-constructor
  constructor (private padelRepository: PadelRepository) {}

  async execute () {
    const rankingData = await this.padelRepository.getRanking()

    return rankingData.data.map((rankingDTO: RankingDTO) => new PlayerRanking(rankingDTO))
  }
}
