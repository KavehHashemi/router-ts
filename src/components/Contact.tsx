import "../styles/Contact.css"
import Card from "@mui/material/Card"
import Header from "@mui/material/CardHeader"
import Content from "@mui/material/CardContent"
import Media from "@mui/material/CardMedia"

import Actions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

const Contact = () => {
    return <>
        <div className="contact-container">
            <Card className="contact-card">
                <Header title="Address" ></Header>
                <Content>
                    Iran,Tehran
                </Content>
            </Card>
            <Card className="contact-card">
                <Header title="Email"></Header>
                <Content>
                    KavehHashemi@outlook.com
                </Content>
                <Actions>
                    <Button>Email Me</Button>
                </Actions>
            </Card>
            <Card className="contact-card">
                <Header title="GitHub"></Header>
                <Content>

                </Content>
                <Actions>
                    <Button href="https://www.github.com/kavehhashemi">Open</Button>
                </Actions>
            </Card>
            <Card className="contact-card">
                <Header title="LinkedIn"></Header>
                <Content>

                </Content>
                <Actions>
                    <Button href="https://www.linkedin.com/in/kavehhashemi">Open</Button>
                </Actions>
            </Card>
            <Card className="contact-card">
                <Header title="Phone"></Header>
                <Content>
                    +9893376318905
                </Content>
                <Actions>
                    <Button>Telegram</Button>
                    <Button>WhatsApp</Button>
                </Actions>
            </Card>
        </div>
    </>
}

export default Contact