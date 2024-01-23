import './App.css'
import { FollowCard } from './FollowCard.jsx'


export function App(){
    const marcoslorenzo = { userName: 'marcoslorenzo'}
    const elonmusk = { userName: 'elonmusk'}
    const midudev = { userName: 'midudev'}
    const format = (userName) => `@${userName}`
    return (
        <div className='App'>
            <FollowCard formatUserName={format} {...marcoslorenzo}>
                <strong>Juan Marcos Lorenzo</strong>
            </FollowCard>
            <FollowCard formatUserName={format} {...elonmusk}>
                <strong>Elon Musk</strong>
            </FollowCard>
            <FollowCard formatUserName={format} {...midudev}>
                <strong>Miguel Ángel Durán</strong>
            </FollowCard>
        </div>
    )
}