import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeOptions } from "@mui/material/styles/createTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
  },
};
const theme = createTheme(themeOptions);



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/skills" element={<Skills />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
