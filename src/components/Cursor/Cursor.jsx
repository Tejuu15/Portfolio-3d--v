import { useEffect, useState } from 'react'

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div
      className="cursor-glow"
      aria-hidden="true"
      style={{ left: position.x, top: position.y }}
    />
  )
}

export default Cursor
