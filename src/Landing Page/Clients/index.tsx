import React from 'react'
import Bira from '../../images/Landing-Bira.png'
import PaperBoat from '../../images/Landing-Paperboat.png'
import Mobikwik from '../../images/Landing-MobiKwik.png'
import HealthKart from '../../images/Landing-HealthKart.png'
import ClientCard from '../../components/ClientCard'

const Clients = () => {
    const imageSrc=[{
        src:Bira
    },
    {
        src:PaperBoat
    },{
        src:Mobikwik
    },{
        src:HealthKart
    },]
  return (
    <>
    {imageSrc.map(src=><ClientCard/>)}
    </>
  )
}

export default Clients
