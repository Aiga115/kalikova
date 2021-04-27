import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="home">
          <img className="home-background" src="/Background.png" alt="background" width="100%" height="600px"/>
          <div className="home-title">
              Kalikova & <br/>
              Associates <br/>
              Law Firm
          </div>
      </div>
    </div>
  )
}
