import styles from '../styles/RootLayout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <div className={styles.page}>{children}</div>
        </main>
      </body>
    </html>
  )
}
