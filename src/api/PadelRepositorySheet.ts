import { AxiosResponse } from 'axios'
import { xhr } from './config/Repository'
import MatchDTO from './dto/MatchDTO'
import RankingDTO from './dto/RankingDTO'
import SheetReponseDTO from './dto/SheetResponseDTO'

export default class PadelRepositorySheet {
  getRanking (): Promise<SheetReponseDTO<RankingDTO>> {
    const url = 'https://v1.nocodeapi.com/cristianoedu/google_sheets/bUCbntBsHhhYNQHY?tabId=Clasificaci%C3%B3n'

    return xhr.get<SheetReponseDTO<RankingDTO>>(url)
      .then((response: AxiosResponse) => {
        return response.data
      })
  }

  getPartidos () {
    const url = 'https://v1.nocodeapi.com/cristianoedu/google_sheets/bUCbntBsHhhYNQHY?tabId=Partidos'

    return xhr.get<SheetReponseDTO<MatchDTO>>(url)
      .then((response: AxiosResponse) => {
        return response.data
      })
  }
}
