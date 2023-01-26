import {createRoot} from 'react-dom/client'
import App from "./App"

const nodeRoot = document.getElementById('root')
const root = createRoot(nodeRoot)
root.render(<App />)