//Хук, с помощью которого можно к готовым actions creators забиндить диспатч. Из этого хука необходимо вернуть actions creators, к которым прибиндин dispatch.
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActionCreators } from '../store/reducers/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}
