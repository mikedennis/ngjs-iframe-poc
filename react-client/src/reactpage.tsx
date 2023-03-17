import Greeting from './greeting'
import TextBody from './textbody'
type ReactPageProps = { name: string, text: string}

export default function ReactPage({name, text}: ReactPageProps) {
    return (
        <div>
            <h1>React Page</h1>
            <Greeting name={name}></Greeting>
            <TextBody text={text}></TextBody>
        </div>
    );
}