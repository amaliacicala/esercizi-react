import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import './style/index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />)