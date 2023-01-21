import "../styles/Projects.css"
import Card from "@mui/material/Card"
import Header from "@mui/material/CardHeader"
import Content from "@mui/material/CardContent"
import Media from "@mui/material/CardMedia"
import ActionsArea from "@mui/material/CardActionArea"
import Actions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
const Projects = () => {


    const cardsArray: JSX.Element[] = []
    for (let i = 0; i < 6; i++) {
        cardsArray.push(
            <Card className="projects-card" key={i}>
                <Header title="Nats Client" subheader="Typescript, Redux-toolkit"></Header>
                <Content>
                    <Media
                        component={"img"}
                        src="https://nats.io/img/logos/nats-horizontal-color.png">
                    </Media>
                </Content>
                <ActionsArea>
                    <Actions>
                        <Button href="https://github.com/KavehHashemi/nats-react-ts">View in GitHub</Button>
                    </Actions>
                </ActionsArea>
            </Card>
        )
    }

    return <>
        <div className="projects-container">
            {cardsArray}
        </div>
    </>
}

export default Projects