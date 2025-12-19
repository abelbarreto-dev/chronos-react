import { Fragment } from "react/jsx-runtime";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css"

export function App() {
    return (
        <Fragment>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <CountDown>
                00:00
            </CountDown>

            <Container>
                <Form />
            </Container>

            <Container>
                <Footer />
            </Container>
        </Fragment>
    );
}
