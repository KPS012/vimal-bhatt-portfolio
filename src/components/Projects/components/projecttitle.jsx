'use client';
import React from 'react'
import styles from './style.module.scss';

export default function ProjectTitle({title, para}) {

    return (
        <div className={styles.project}>
            <div>
                <h2 className='text-[#ffff]' >{title}</h2>
            </div>
            <div className="w-[200px] text-[#ffff]">
                <p>{para}</p>
            </div>
        </div>
    )
}
