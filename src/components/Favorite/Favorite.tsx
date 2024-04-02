import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../../context/BookContext'
import styles from './favorite.module.scss'

const Favorite: FC = () => {
	const { favorite, handleDeleteBookFavorite } = useContext(BookContext)
	return (
		<>
			{favorite.length === 0 && (
				<div className={styles.favoriteEmpty}>Empty</div>
			)}
			<div className={styles.favorite}>
				{favorite.map((el) => (
					<div key={el.id} className={styles.favoriteInner}>
						<Link to={`/book/${el.id}`}>
							<img
								className='rounded-lg'
								src={el.thumbnailUrl}
								width={180}
								alt='book'
							/>
							<div className='text-wrap text-md mt-1'>{el.title}</div>
							<div className='text-wrap text-sm mt-1'>{el.authors}</div>
						</Link>

						<button
							className='absolute right-3'
							onClick={() => handleDeleteBookFavorite(el)}
						>
							<img src='/close_black_36dp.svg' alt='Delete' />
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Favorite
