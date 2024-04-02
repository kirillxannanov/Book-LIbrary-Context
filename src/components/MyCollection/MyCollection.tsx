import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../../context/BookContext'
import styles from './myCollection.module.scss'

const MyCollection: FC = () => {
	const { collection, handleDeleteBookCollection } = useContext(BookContext)

	return (
		<>
			{collection.length === 0 && (
				<div className={styles.collectionEmpty}>Empty</div>
			)}
			<div className={styles.collection}>
				{collection.map((el) => (
					<div key={el.id} className={styles.collectionInner}>
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
							onClick={() => handleDeleteBookCollection(el)}
						>
							<img src='/close_black_36dp.svg' alt='Delete' />
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default MyCollection
