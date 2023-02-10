import React, { useEffect, useRef, useState } from 'react'

type Props = {
  a?: number,
}


function CountFunctionalComponent(props: Props) {
  const { a } = props
  const [count, setCount] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval>>()
  useEffect(() => {
    console.log(1);
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }, [])
  return (
    <div>CountFunctionalComponent: {count}</div>
  )
}

export default CountFunctionalComponent