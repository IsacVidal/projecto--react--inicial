import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/IsacVidal.png"/>
                <strong>Isac Vidal</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20}/> Editar seu Perfil</a>
            </footer>
        </aside>
    )
    
}