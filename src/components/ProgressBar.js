import { ProgressBar } from "react-bootstrap";

function Progressbar(){

    const now = 60;

    return <ProgressBar now={now}label={`${now}%`}/>


}

export default Progressbar  