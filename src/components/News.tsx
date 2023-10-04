import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import './Components.scss';

interface NewsProps {
    className?: string
    title: string
    point: number
}

export default function News(props: NewsProps) {
    return (
        <div className={className('news', props.className)}>
            <FontAwesomeIcon icon={faCoffee} />
            <span className="title">{props.title}</span>
            <div className="point">{props.point} Pts</div>
        </div>
    )
}