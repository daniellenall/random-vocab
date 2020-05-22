import styles from './layout.module.scss'


function Layout({ children }) {
    return (
        <div>
            <header className={styles.header}>
                <h1>Random Vocab</h1>
            </header>
            {children}
            <footer className="footer">
                <p>Made by Danielle Nall</p>
            </footer>
        </div>)
}

export default Layout