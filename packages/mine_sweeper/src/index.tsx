import { createRoot } from 'react-dom/client'
import { App } from './mine_sweeper'

export function createGame(el: Element) {
  createRoot(el)
    .render(<App />)
}
