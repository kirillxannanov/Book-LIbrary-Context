import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import BookProvider from './context/BookContext.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<BookProvider>
				<App />
			</BookProvider>
		</BrowserRouter>
	</React.StrictMode>
)
