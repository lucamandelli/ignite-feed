import styles from './Post.module.css'


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucamandelli.png" alt="post-author-profile-image" />
          <div className={styles.authorInfo}>
            <strong>Luca Mandelli</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title='17 de Janeiro às 16:46h' dateTime='2023-01-17'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
}
