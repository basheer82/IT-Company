import React from 'react'

import image from '../../src/weeb.png'
const Home = ()=>{

    return(
        <div className = 'home-page-div'>
        <div className = 'welcome-text'>
        <p>Suspendisse ultrices mauris ac augue tempor porta. Donec nec commodo diam. Pellentesque vitae felis eu elit mattis pretium 
        id ut nunc. Maecenas tempus iaculis purus, at pellentesque libero luctus at. Phasellus pellentesque eleifend ultricies. 
        Aenean viverra tellus vitae mi elementum, at tincidunt neque condimentum. Donec et urna non elit commodo dictum et vitae dui.
        Sed mi tortor, consectetur a vulputate vel, pellentesque quis nisi. Vivamus aliquam auctor dui, vel volutpat orci ultrices
        ac. Aenean in turpis commodo tellus commodo dapibus quis et diam. Donec eget convallis orci, non vehicula sem. Morbi at
        mauris non ipsum maximus rhoncus eu vel ante. Pellentesque justo dui, vulputate a diam sit amet, tempor interdum magna.
        Cras consequat,   nibh eget accumsan congue, orci mauris iaculis ex, nec lacinia libero nunc ut magna. Praesent sed 
        maximus felis.</p>
        </div>
        <div className = 'welcome-image'>
        <img src = {image}/>
        </div>
        </div>
    )
}

export default Home