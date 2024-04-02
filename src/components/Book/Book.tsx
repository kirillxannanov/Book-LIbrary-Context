import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IBookList } from '../../context/BookContext'
import styles from './book.module.scss'
interface IBookProps {
	addBookCollection: (obj: IBookList) => void
	addBookFavorite: (obj: IBookList) => void
	deleteBookCollection: (obj: IBookList) => void
	deleteBookFavorite: (obj: IBookList) => void
	isCheckCollection: (obj: IBookList) => boolean
	isCheckFavorite: (obj: IBookList) => boolean
	id: number
	title: string
	pageCount: number
	thumbnailUrl: string
	shortDescription?: string
	longDescription: string
	authors: string
}
const Book: FC<IBookProps> = (props) => {
	return (
		<div className={styles.book}>
			<Link to={`/book/${props.id}`}>
				<img
					className='rounded-lg'
					src={props.thumbnailUrl}
					width={180}
					alt='book'
				/>
				<div className='text-wrap text-md mt-1'>{props.title}</div>
				<div className='text-wrap text-sm mt-1'>{props.authors}</div>
			</Link>

			<div className={styles.buttonsPosition}>
				<button
					onClick={
						props.isCheckCollection(props)
							? () => props.deleteBookCollection(props)
							: () => props.addBookCollection(props)
					}
				>
					<div>
						{props.isCheckCollection(props) ? (
							<img src='/bookmark_black_36dp.svg' alt='Collection' />
						) : (
							<img src='/bookmark_border_black_36dp.svg' alt='UnCollection' />
						)}
					</div>
				</button>

				<button
					onClick={
						props.isCheckFavorite(props)
							? () => props.deleteBookFavorite(props)
							: () => props.addBookFavorite(props)
					}
				>
					<div>
						{props.isCheckFavorite(props) ? (
							<img src='/favorite_black_36dp.svg' alt='Like' />
						) : (
							<img src='/favorite_border_black_36dp.svg' alt='UnLike' />
						)}
					</div>
				</button>
			</div>
		</div>
	)
}

export default Book
