import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './Resume.css'
import WorkIcon from '@material-ui/icons/Work';
import CostumTimeLine, {CostumTimeLinesseparator} from "../../components/Timeline/Timeline"
import resumeData from '../../utils/resumeData'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import TimelineDot from '@material-ui/lab/TimelineDot';


const Resume= () => {
    return (
        <>
        {/*About me*/}
       <Grid container className='section pb_45 pt_45'>
           <Grid item className='section_title mb_30'>
               <span></span>
               <h6 className='section_title_text'>Tentang Saya</h6>    
           </Grid>
           <Grid item xs={12}>
               <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
           </Grid>
       </Grid> 
       <Grid container className='section pb_45'>
           <Grid item className='section_title mb_30'>
               <span></span>
               <h6 className='section_title_text'>Resume</h6>    
           </Grid>
           <Grid item xs={12}>
               <Grid container className='resume_TimeLine'>
                {/*Pengalaman*/}
                    <Grid item sm={12} md={6}>
                         <CostumTimeLine title='Pendidikan' icon={<SchoolIcon/>}>
                         {resumeData.pendidikan.map(pendidikan => (
                        <TimelineItem>
                        <CostumTimeLinesseparator />
                        <TimelineContent>
                            <Typography className='timeline_title'>{pendidikan.title}</Typography>
                            <Typography variant='caption' className='timeline_date'>{pendidikan.date}</Typography>
                            <Typography variant='body2' className='timeline_description'>{pendidikan.description}</Typography>
                        </TimelineContent>
                            </TimelineItem>
                         ))}              
                        </CostumTimeLine> 
                    </Grid>
                                {/*Pendidikan*/}
                     <Grid item sm={12} md={6}>
                         <CostumTimeLine title='Pengalaman' icon={<WorkIcon/>}>
                         {resumeData.exp.map(exp => (
                        <TimelineItem>
                        <CostumTimeLinesseparator />
                        <TimelineContent>
                            <Typography className='timeline_title'>{exp.title}</Typography>
                            <Typography variant='caption' className='timeline_date'>{exp.date}</Typography>
                            <Typography variant='body2' className='timeline_description'>{exp.description}</Typography>
                        </TimelineContent>
                            </TimelineItem>
                         ))}              
                        </CostumTimeLine> 
                     </Grid>
               </Grid>
           </Grid>
       </Grid>

        {/*Services*/}
       <Grid container className='section pb_45'>
       <Grid item className='section_title mb_30'>
               <span></span>
               <h6 className='section_title_text'>Layanan</h6>    
           </Grid>
           
           <Grid item xs={12}>
               <Grid container spacing={3} justify='space-around'>
               {resumeData.layanan.map(layanan => (
                   <Grid item xs={12} sm={6} md={3}>
                       <div className='service'>
                           <Icon className='service_icon'>{layanan.icon}</Icon>
                           <Typography className='service_title' variant='h6'>{layanan.title}</Typography>
                           <Typography className='service_description' variant='body2'>{layanan.description}</Typography>
                       </div>
                    </Grid>
               ))}
               </Grid>
           </Grid>
       </Grid>

        {/*Skills*/}
        <Grid container    className='section graybg p_50'>
            <Grid item xs={12}>
                <Grid container justify='space-between' spacing={3}>
                {resumeData.skills.map(skills => (
                   <Grid item xs={12} sm={6} md={3}>
                       <Paper elevation={0} className='skill'>
                            <Typography variant='6' className='skill_title'>
                                {skills.title}
                            </Typography>  
                            {skills.description.map(element => (
                                <Typography variant='body2' className='skill_description'>
                                   
                                    <TimelineDot variant={'outlined'} className='timeline_dot'/>
                                    {element}
                                </Typography>
                            ))} 
                       </Paper>
                    </Grid>
               ))}
                </Grid>
            </Grid>
              
               </Grid>
        {/*Contact*/}
       <Grid container class Name='section'></Grid>
       </>
    )
    
}


export default Resume
