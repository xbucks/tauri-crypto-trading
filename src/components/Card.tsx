import className from 'classnames'
import './Components.scss';

interface CardProps {
    className?: string
}

export default function Card(props: CardProps) {
    return (
        <div className={className('newscard', props.className)}>

        </div>
    )
}