import { useState } from "react"

export function FollowCard({children, formatUserName, userName='unknow', name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar'
            src={`https://unavatar.io/${userName}`}
            alt="Avatar de Midudev" />
            <div className='tw-followCard-info'>
                {children}
                <span className='tw-followCard-info-userName'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}