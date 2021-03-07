import React, { useRef}from 'react'
import IdleTimer from 'react-idle-timer'

export default function IdleAnnimationFN({loadanim, startanimation, stopanimation}) {
    const idleTimerRef = useRef(null)
    const onIdle = () => {startanimation()}
    const onActive = () => {stopanimation()}
    return(
        <div>
            <IdleTimer ref={idleTimerRef} timeout={10 * 1000} onIdle={onIdle} onActive={onActive}/>
        </div>
    )
}