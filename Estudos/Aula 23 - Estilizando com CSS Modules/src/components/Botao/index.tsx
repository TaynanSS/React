// import './styles.css';   // anteriormente estava dessa forma.
import styles from './styles.module.css';

export const Botao = () => {
    return (
        <div className={styles.square}>
            <button className={styles.botao}>Mostrar aqui</button>
            <p className={styles.legend}>Legenda</p>
        </div>
    );
}