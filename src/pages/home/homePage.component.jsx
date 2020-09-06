import React from 'react'
import './homePage.styles.scss'
import Banner from '../../components/banner/banner.component'
function HomePage() {
    return (
        <div className='home-page'>
        <Banner/>
        <p className="r-qoute">
        I had always planned to make a large painting of the early spring, when the first leaves are at the bottom of the trees, and they seem to float in space in a wonderful way. But the arrival of spring can't be done in one picture.

<br/>-David Hockney
        </p>
        </div>
    )
}

export default HomePage
