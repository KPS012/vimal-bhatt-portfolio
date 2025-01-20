"use client"

import React from 'react';
import CaseBlog from '@/components/caseBlog/caseBlog';
import ContentPage from './components/content';
import Necss from './components/necss';

export default function DrShardaPage(){

    return(
        <>
        <ContentPage />
        <Necss />
        <CaseBlog
            H3="Amplifbrands"
            Url="/creations/amplifbrands"
            Img="/images/amplifbrands.png"
        />
        </>
    )
}
