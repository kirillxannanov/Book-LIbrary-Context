import './App.scss'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Home from './components/pages/Home'

function App() {
	return (
		<>
			<Header />
			<div className='flex '>
				<Menu />
				<Home />
			</div>
		</>
	)
}

export default App
