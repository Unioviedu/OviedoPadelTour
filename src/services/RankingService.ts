import PadelRepository from '@/api/PadelRepository'
import PadelRepositoryMock from '@/api/PadelRepositoryMock'
import PadelRepositorySheet from '@/api/PadelRepositorySheet'
import FindRanking from './FindRanking'

export default class RankingService {
  static getInstance () {
    const padelRepository: PadelRepository = this.getPadelRepository()

    return {
      findRanking: new FindRanking(padelRepository)
    }
  }

  private static getPadelRepository (): PadelRepository {
    const mock = process.env.VUE_APP_MOCK_ALL_ENDPOINTS === 'true'

    return mock
      ? new PadelRepositoryMock()
      : new PadelRepositorySheet()
  }
}
