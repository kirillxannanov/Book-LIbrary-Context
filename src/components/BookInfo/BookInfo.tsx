import { FC, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BookContext } from '../../context/BookContext'

const BookInfo: FC = () => {
	const { bookList } = useContext(BookContext)
	const { id } = useParams()

	return (
		<div className='mt-10 '>
			<div className=' w-96  '>
				<div className='flex gap-x-10 mt-5 '>
					<div>
						<img
							src={bookList[Number(id) - 1].thumbnailUrl}
							className='rounded-lg'
							width={180}
							alt='book'
						/>
					</div>
					<div>
						<div className='text-wrap text-2xl mt-2'>
							{bookList[Number(id) - 1].title}
						</div>
						<div className='text-wrap text-lg mt-2'>
							{bookList[Number(id) - 1].authors}
						</div>
						<div className='text-wrap text-lg mt-2'>
							Page {bookList[Number(id) - 1].pageCount}
						</div>
					</div>
				</div>

				<div className='text-wrap text-2xl mt-3 '>
					{bookList[Number(id) - 1].shortDescription}
				</div>
			</div>
		</div>
	)
}

export default BookInfo
