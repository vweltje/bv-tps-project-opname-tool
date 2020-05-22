import { useState, useEffect } from "react"

const getBoundingClientRect = () =>
  typeof window === "undefined" || !window.document
    ? { top: 0, left: 0 }
    : document.body.getBoundingClientRect()

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: getBoundingClientRect().left,
    y: getBoundingClientRect().top,
    direction: ""
  })

  const listener = () => {
    setScroll(prev => ({
      x: getBoundingClientRect().left,
      y: -getBoundingClientRect().top,
      direction: prev.y > -getBoundingClientRect().top ? "up" : "down"
    }))
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  })

  return scroll
}

export default useScroll
