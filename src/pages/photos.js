import React from 'react'
import Layout from '../components/layout'
import photosStyles from './photos.module.scss'

// import Insta from '../components/insta'

const PhotosPage = () => {
    // console.log(Insta)
    return (
        <Layout>
            <main className={photosStyles.photosContainer}>
                <section className={photosStyles.photosContentContainer}>
                    {/* <Insta/> */}
                </section>
            </main>
        </Layout>
    )
}

export default PhotosPage;