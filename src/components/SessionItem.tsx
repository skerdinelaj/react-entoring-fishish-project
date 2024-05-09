import Button from "../UI/Button";
type SessionItemProps = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

export default function SessionItem({ ...session }: SessionItemProps) {
    return (
        <article className='session-item'>
            <img src={session.image} alt="Session img" loading='lazy' />
            <div className="session-data">
                <div>
                    <h3>{session.title}</h3>
                    <p>{session.summary}</p>
                </div>
                <p className='actions'>
                    <Button to={session.id} className='button'>Learn more</Button>
                </p>
            </div>
        </article>
    )
}
