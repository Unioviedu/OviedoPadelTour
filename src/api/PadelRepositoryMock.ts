import { xhr } from './config/Repository'
import rankingJSON from '@/assets/mock/RankingJSON.json'
import partidosJSON from '@/assets/mock/PartidosJSON.json'
import RankingDTO from './dto/RankingDTO'
import SheetReponseDTO from './dto/SheetResponseDTO'
import MatchDTO from './dto/MatchDTO'

export default class PadelRepositoryMock {
  getRanking (): Promise<SheetReponseDTO<RankingDTO>> {
    const response: SheetReponseDTO<RankingDTO> = rankingJSON
    return Promise.resolve(response)
  }

  getPartidos (): Promise<SheetReponseDTO<MatchDTO>> {
    const response: SheetReponseDTO<MatchDTO> = partidosJSON
    return Promise.resolve(response)
  }
}
