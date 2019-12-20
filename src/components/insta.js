 import React from 'react';
import Image from 'gatsby-image'

import instaStyles from './insta.module.scss';
// import useInstagram from '../hooks/use-instagram'

const Insta = () => {
    const instaPhotos= useInstagram();
    const {username} = instaPhotos[0]

    return (
        <main className={instaStyles.instaContainer}>
            <section className={instaStyles.instaContentContainer}>
            <h1>Follow us on Instagram!</h1>
            <a className={instaStyles.instaLink} href="https://instagram.com/recess_playworks"  target="_blank" rel="noopener noreferrer">
                    @{username}
                </a>
                {/* <div className={instaStyles.imgContainer}>
                    {instaPhotos.map(photo=> (
                        <a key={photo.id}  href={`https://instagram.com/p/${photo.id}/`}>
                            <Image 
                            fluid={photo.fluid}
                            alt={photo.caption}/>
                        </a>
                    ))}
                </div> */}
            </section>
        </main>
    )
}

export default Insta;