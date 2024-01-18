import s from "../header/Header.module.css"
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    const relocate = (link) => {
        navigate(link)
    }

    return (
        <div className={s.headerContainer}>
            <nav className={s.nav}>
                <ul className={s.nav_ul}>
                    <li onClick={() => relocate('/')}>English Learner</li>
                    <li onClick={() => relocate('/tests')}>Tests</li>
                    <li onClick={() => relocate('/learn')}>Learning new words</li>
                </ul>
            </nav>
        </div>
    )
}