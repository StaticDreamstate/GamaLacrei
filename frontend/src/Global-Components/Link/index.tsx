import { Link } from "react-router-dom";

interface ILink {
    name: string
    redirect: string;
}

export default function Links(props: ILink){
    <Link to={props.redirect}>{props.name}</Link>
}