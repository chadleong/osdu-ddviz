import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"

export const Header: React.FC = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        OSDU Schema Visualization
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
