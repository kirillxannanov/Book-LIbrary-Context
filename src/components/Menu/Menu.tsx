import { useLocalStorage } from '@react-hooks-library/core'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

const Menu: FC = () => {
	const [menu, setMenu] = useState(1)
	const [localMenu, setLocalMenu] = useLocalStorage('useLocalsStorageKey', menu)

	const arr: number[] = [1, 2, 3]

	const check = (id: number) => {
		return arr.some((el) => {
			if (el === id) {
				setMenu(el)
				setLocalMenu(el)
			}
		})
	}

	return (
		<div className={styles.menu}>
			<div>
				<Link to='/'>
					<div
						className={localMenu === 1 ? styles.active : ''}
						onClick={() => check(1)}
					>
						All Books
					</div>
				</Link>

				<Link to='collection'>
					<div
						className={localMenu === 2 ? styles.active : ''}
						onClick={() => check(2)}
					>
						My Collection
					</div>
				</Link>

				<Link to='favorite'>
					<div
						className={localMenu === 3 ? styles.active : ''}
						onClick={() => check(3)}
					>
						Favorite
					</div>
				</Link>
			</div>
			<div>
				<div>Settings</div>
				<div>Log Out</div>
			</div>
		</div>
	)
}

export default Menu
