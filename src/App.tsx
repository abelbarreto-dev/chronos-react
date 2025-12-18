import { Fragment } from "react/jsx-runtime";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

export function App() {
    return (
        <Fragment>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Heading>MENU</Heading>
            </Container>
        </Fragment>
    );
}
