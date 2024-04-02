import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import BookInfo from '../BookInfo/BookInfo'
import BookList from '../BookList/BookList'
import Favorite from '../Favorite/Favorite'
import MyCollection from '../MyCollection/MyCollection'
import NotFound from '../NotFound/NotFound'

const Home: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<BookList />} />
			<Route path='collection' element={<MyCollection />} />
			<Route path='favorite' element={<Favorite />} />
			<Route path='book/:id' element={<BookInfo />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Home
