'use client';
import styles from './styles.module.css';
import Magnetic from '@/common/Magnetic/magButton'

export default function Logo() {
    return (
        
        <Magnetic>
            <a href="/">
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <span className={styles.codeBy}>Code by</span>
                        <span className={styles.vimal}>Vimal</span>
                        <span className={styles.bhatt}>Bhatt</span>
                    </div>
                </div>
            </a>
        </Magnetic>
    )
}
