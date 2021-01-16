
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Profiles from './components/Profiles/Profiles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portofolio from './pages/Portofolio/Portofolio';
import Resume from './pages/Resume/Resume';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
   <Container className={'top_60'}>
     <Grid container spacing={7}>
       <Grid item xs={12} xm={12} md={4} lg={3}> 
       <Profiles/>
       </Grid>
       <Grid item xs >
        <Router>
        <Header/>
        <div className='main_content container_shadow'>
        <Switch>
            <Route path='/portofolio'>
            <Portofolio/>
            </Route>
            <Route path='/'>
            <Resume/>
            </Route>
          </Switch>  
        </div>    
        </Router>
        <Footer/>
          </Grid>
     </Grid>
   </Container>
  );
}

export default App;
