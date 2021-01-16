
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './Portofolio.css'
import resumeData from '../../utils/resumeData'

const Portofolio = () => {
    const[tabValue, setTabValue] = useState("All")
    const [projectDialog, setProjectDialog] = useState(false)
 

    return (
        <Grid container spacing={1} className='section pb_45 pt_45'>
            {/*Title */}
             <Grid item className='section_title mb_20'>
               <span></span>
               <h6 className='section_title_text'>Portofolio</h6>    
           </Grid>
            {/*tabs */}
            <Grid item xs={12}>

                <Tabs value={tabValue} indicatorColor='white' className='costumTabs' 
                onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' 
                        value='All' 
                    className={tabValue === 'All' ?  'costumTabs_item active' : 'costumeTabs_item'} />

                    {[...new Set(resumeData.projects.map(item => item.tag))].map((tag) =>(
                        <Tab label={tag} value={tag} 
                        className={tabValue == tag ?  'costumTabs_item active' : 'costumeTabs_item'}
                        />
                    ))}
                </Tabs>
            </Grid>
             {/*Project */}
             <Grid item xs={12}>
                 <Grid container spacing={3}>
                     {resumeData.projects.map(project => (
                        <>
                        {tabValue == project.tag || tabValue == 'All' ? (
                             <Grid item xs={12} sm={6} md={4} lg={3}>
                             <Grow in timeout={1000}>
                                <Card className='costumCard' onClick={() =>setProjectDialog(project)}> 
                                    <CardActionArea>
                                        <CardMedia  className='costumCard_image' image={project.image} title={project.title}/>
                                        
                                        <CardContent >
                                            <Typography className='costumCard_title'>{project.title}</Typography>
                                            <Typography variant='body2' className='costumCard_description'>{project.caption}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                             </Grow>
                         </Grid>) : null}
                         </>
                     ))}
                 </Grid>
             </Grid>
             <Dialog open={projectDialog} onClose={() =>setProjectDialog(false)}>
            <DialogTitle onClose={() =>setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <img src='' alt='' className='projectDialog_image'/>
            <DialogContent>
                <Typography className='projectDialog_description'> {projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className='projectDialog_actions'>
            {projectDialog?.links?.map(link => (
                <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
            ))}
            </DialogActions>
        </Dialog>
        </Grid>
       
    )
}

export default Portofolio
