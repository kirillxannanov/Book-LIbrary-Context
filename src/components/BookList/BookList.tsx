import { FC, useContext } from 'react'
import { BookContext } from '../../context/BookContext'
import Book from '../Book/Book'
import styles from './bookList.module.scss'

const BookList: FC = () => {
	const {
		searchBookList,
		handleAddBookCollection,
		handleAddBookFavorite,
		handleDeleteBookCollection,
		handleDeleteBookFavorite,
		isCheckCollection,
		isCheckFavorite
	} = useContext(BookContext)

	return (
		<>
			{searchBookList.length === 0 && (
				<div className={styles.bookListEmpty}>Empty</div>
			)}
			<div className={styles.bookList}>
				{searchBookList.map((book) => (
					<Book
						key={book.id}
						addBookCollection={handleAddBookCollection}
						addBookFavorite={handleAddBookFavorite}
						deleteBookCollection={handleDeleteBookCollection}
						deleteBookFavorite={handleDeleteBookFavorite}
						isCheckCollection={isCheckCollection}
						isCheckFavorite={isCheckFavorite}
						{...book}
					/>
				))}
			</div>
		</>
	)
}

export default BookList
