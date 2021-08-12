import React from 'react'
import OneGame from '../oneGame/OneGame'
import styles from './Games.module.css'

export default function Games() {

    return (
        <div className={styles.games}>
            <OneGame />
            
        </div>
    )
}
