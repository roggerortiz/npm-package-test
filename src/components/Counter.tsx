import { FC, useState } from 'react'

type Props = {
  value?: number
}

const Counter: FC<Props> = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(value)

  const onMinus = () => {
    setCounter((prev: number) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev: number) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={onMinus}> -</button>
      <button onClick={onPlus}> +</button>
    </div>
  )
}

export default Counter
