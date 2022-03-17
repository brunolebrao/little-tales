import { Button } from 'components/Button'
import styled from './styles.module.scss'
export function Header() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styled.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
        <Button/>
      </div>
    </header>
  )
}
