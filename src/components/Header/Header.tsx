import Avatar from '@mui/material/Avatar'
import { useDebounce } from '@react-hooks-library/core'
import { FC, useContext } from 'react'
import { BookContext } from '../../context/BookContext'
import styles from './header.module.scss'

const Header: FC = () => {
	const { search, setSearch } = useContext(BookContext)
	const debounce = useDebounce(search, 500)

	return (
		<div className={styles.header}>
			<img src='/Logo.svg' alt='Logo' width={180} height={50} />

			<input
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
				className={styles.search}
				type='text'
				defaultValue={debounce}
			/>

			<Avatar>K</Avatar>
		</div>
	)
}

export default Header
