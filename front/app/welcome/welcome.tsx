import { useEffect, useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import axios from "axios";

export function Welcome() {
    const [foo, setFoo] = useState("loading");
    useEffect(() => {
        axios.get("/api/").then((response) => {
            setFoo(response.data.foo);
        });

        const socket = new WebSocket("ws://localhost:8000/ws");
        socket.addEventListener('open', () => {
            socket.send("fegli");
        })
    }, [])

    return <p>{foo}</p>
}