import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import data from '../data/data.json'

export interface IBookList {
	id: number
	title: string
	pageCount: number
	thumbnailUrl: string
	shortDescription?: string
	longDescription: string
	authors: string
}
interface IProps {
	children?: ReactNode
}
interface IBookContext {
	bookList: IBookList[]
	collection: IBookList[]
	favorite: IBookList[]
	handleAddBookCollection: (obj: IBookList) => void
	handleAddBookFavorite: (obj: IBookList) => void
	searchBookList: IBookList[]
	searchCollection: IBookList[]
	searchFavorite: IBookList[]
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	handleDeleteBookCollection: (obj: IBookList) => void
	handleDeleteBookFavorite: (obj: IBookList) => void
	isCheckCollection: (obj: IBookList) => boolean
	isCheckFavorite: (obj: IBookList) => boolean
}

export const BookContext = createContext<IBookContext>({
	bookList: [],
	collection: [],
	favorite: [],
	handleAddBookCollection: () => {},
	handleAddBookFavorite: () => {},
	searchBookList: [],
	searchCollection: [],
	searchFavorite: [],
	search: '',
	setSearch: () => {},
	handleDeleteBookCollection: () => {},
	handleDeleteBookFavorite: () => {},
	isCheckCollection: () => false,
	isCheckFavorite: () => false
})

const BookProvider: FC<IProps> = ({ children }) => {
	const [bookList, setBookList] = useState<IBookList[]>(data)

	const [collection, setCollection] = useState<IBookList[]>(
		JSON.parse(localStorage.getItem('collection') || '""')
	)
	const [favorite, setFavorite] = useState<IBookList[]>(
		JSON.parse(localStorage.getItem('favorite') || '""')
	)
	const [search, setSearch] = useState<string>('')

	useEffect(() => {
		const addBook = () => {
			setBookList(bookList)

			localStorage.setItem('collection', JSON.stringify(collection))
			localStorage.setItem('favorite', JSON.stringify(favorite))
		}
		addBook()
	}, [bookList, collection, favorite])

	const handleAddBookCollection = (obj: IBookList) => {
		setBookList(
			bookList.map((book) => {
				if (book.id === obj.id) {
					setCollection([...collection, book])
				}
				return book
			})
		)
	}

	const handleAddBookFavorite = (obj: IBookList) => {
		setBookList(
			bookList.map((book) => {
				if (book.id === obj.id) {
					setFavorite([...favorite, book])
				}
				return book
			})
		)
	}

	const handleDeleteBookCollection = (obj: IBookList) => {
		setCollection(collection.filter((book) => book.id !== obj.id))
	}

	const handleDeleteBookFavorite = (obj: IBookList) => {
		setFavorite(favorite.filter((book) => book.id !== obj.id))
	}

	const isCheckCollection = (obj: IBookList) => {
		return collection.some((el) => el.id === obj.id)
	}

	const isCheckFavorite = (obj: IBookList) => {
		return favorite.some((el) => el.id === obj.id)
	}

	const searchBookList = bookList.filter(
		(bookList) =>
			bookList.title.toLowerCase().includes(search.toLowerCase()) ||
			bookList.authors.toLowerCase().includes(search.toLowerCase())
	)

	const searchCollection = collection.filter(
		(collection) =>
			collection.title.toLowerCase().includes(search.toLowerCase()) ||
			collection.authors.toLowerCase().includes(search.toLowerCase())
	)

	const searchFavorite = favorite.filter(
		(favorite) =>
			favorite.title.toLowerCase().includes(search.toLowerCase()) ||
			favorite.authors.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<BookContext.Provider
			value={{
				bookList,
				collection,
				favorite,
				handleAddBookCollection,
				handleAddBookFavorite,
				searchBookList,
				searchCollection,
				searchFavorite,
				search,
				setSearch,
				handleDeleteBookCollection,
				handleDeleteBookFavorite,
				isCheckCollection,
				isCheckFavorite
			}}
		>
			{children}
		</BookContext.Provider>
	)
}

export default BookProvider
