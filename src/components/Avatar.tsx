import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import './Components.scss';

interface AvatarProps {
    className?: string
    fullname: string
    username: string
}

export default function Avatar(props: AvatarProps) {
    return (
        <div className={className('avatar', props.className)}>
            <div className="logo"></div>
            <div className="content">
                <div className='fullname'>{props.fullname}</div>
                <span className='username'>{props.username}</span>
            </div>
        </div>
    )
}