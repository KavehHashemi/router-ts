import "../styles/Skills.css"
import Card from "@mui/material/Card"
import Header from "@mui/material/CardHeader"
import Content from "@mui/material/CardContent"
import Media from "@mui/material/CardMedia"

const Skills = () => {
    return <>
        <div className="skills-container">
            <Card className="skills-card">
                <Content className="skills-content">
                    <Media component="img" height={208} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"></Media>
                </Content>
                <Header title="React"></Header>
            </Card>
            <Card className="skills-card">
                <Content className="skills-content">
                    <Media component="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"></Media>
                </Content>
                <Header title="TypeScript"></Header>
            </Card>
            <Card className="skills-card">
                <Content className="skills-content">
                    <Media component="img" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"></Media>
                </Content>
                <Header title="Redux"></Header>
            </Card>
            <Card className="skills-card">
                <Content className="skills-content">
                    <Media component="img" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png"></Media>
                </Content>
                <Header title="Blazor"></Header>
            </Card>
        </div>
    </>
}

export default Skills