import { useEffect, useState } from "react";
import { Link } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import axios from "axios";

export function Welcome() {
    const [foo, setFoo] = useState("loading");
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8000/ws?test=nope");
        console.log("test");
        socket.addEventListener('open', () => {
            socket.send("fegli");
        });
    }, []);

    return <div className="flex gap-4">
        <Link to={{pathname: "/create"}}>Create</Link>
        <Link to={{pathname: "/join"}}>Join</Link>
    </div>
}