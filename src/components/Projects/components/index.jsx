'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({title, para}) {

    return (
        <div className={styles.project}>
            <div>
                <h2>{title}</h2>
            </div>
            <div className="w-[200px]">
                <p>{para}</p>
            </div>
        </div>
    )
}
