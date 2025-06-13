import React from 'react'
import Calendar from '../Calendar/Calendar'
import Confirm from '../Confirm/Confirm'
import Countdown from '../Countdown/Countdown'
import FooterText from '../FooterText/FooterText'
import InvitationText from '../InvitationText/InvitationText'
import Line from '../Line/Line'
import Program from '../Program/Program'
import "./Container.css"

const Container = () => {
    
  return (
    <main className='container'>
        <InvitationText />
        <Line />
        <Countdown targetDate={"2025-08-07T09:00"}/>
        <Calendar />
        <Line />
        <Program />
        <Line />
        <FooterText />
        <Line />
        <Confirm />
    </main>
  )
}

export default Container