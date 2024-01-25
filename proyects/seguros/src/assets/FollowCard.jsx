import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function FollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'> asd
            <img
            className='tw-followCard-avatar'
            src={`https://unavatar.io/${userName}`}
            alt="Avatar de Midudev" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-info-userName'>{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-folowCard-text">{text}</span> 
                <span className="tw-followCard-unfollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}