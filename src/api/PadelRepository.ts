import { xhr } from './config/Repository'
import MatchDTO from './dto/MatchDTO'
import RankingDTO from './dto/RankingDTO'
import SheetReponseDTO from './dto/SheetResponseDTO'

export default interface PadelRepository {
  getRanking (): Promise<SheetReponseDTO<RankingDTO>>;

  getPartidos (): Promise<SheetReponseDTO<MatchDTO>>;
}
