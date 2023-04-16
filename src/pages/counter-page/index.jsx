import { decrease, increase, setCounter } from '../../redux/counterSlice'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

export default function CounterPage() {

    const counterState=useSelector(state=>state.counterState)
  const dispatch =useDispatch()
    return (
        <main>
            <h2>{counterState.counter}</h2>
      <Button onClick={event=>{dispatch(increase())}} variant='success'>Arttir</Button>
      <Button onClick={event => {dispatch(decrease())}} variant='warning'>Azalt</Button>
      <Button onClick={event => {dispatch(setCounter(0))}} variant='danger'>Sifirla</Button>
        </main>
    )
}