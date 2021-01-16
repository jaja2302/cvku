/* eslint-disable react/jsx-no-target-blank */
import { Typography } from '@material-ui/core'
import React from 'react'
import './Profiles.css'
import CostumTimeLine, {CostumTimeLinesseparator} from "../Timeline/Timeline"
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import CostumButton from '../Button/Buttonku'
import GetAppIcon from '@material-ui/icons/GetApp'
import Jojok from '../../assets/images/jojok.png'; // gives image path


const CostumTimeLineItem =  ({title, text, link}) => (
    <TimelineItem >
         < CostumTimeLinesseparator />
         <TimelineContent className='timeline_content'>
             {link ? (<Typography className='timelineItem_text'>
                 <span>{title}</span> <a href={link} target='_blank'>{text}</a>
             </Typography>) : (
                 <Typography className='timelineItem_text'>
                    <span>{title}:</span>
                    {text}
                 </Typography>
             )}
         </TimelineContent>
      </TimelineItem>
)

function Profiles() {
    return (
        <div className='profile container_shadow'>
           <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
           </div> 

           <figure className='profile_image'>
               <img src={Jojok} alt=''></img>
           </figure>

           <div className='profile_information'>
                <CostumTimeLine icon={<PersonOutlineIcon />}>
               <CostumTimeLineItem title='Nama' text={resumeData.name} />
               <CostumTimeLineItem title='Title' text={resumeData.title} />
               <CostumTimeLineItem title='Email' text={resumeData.email} />
               <CostumTimeLineItem title='Lahir' text={resumeData.birthday} />
               <CostumTimeLineItem title='Alamat' text={resumeData.alamat} />
               <CostumTimeLineItem title='No Hp' text={resumeData.phone} />
               {Object.keys(resumeData.sosmed).map(key => (
                   <CostumTimeLineItem title={key} text={resumeData.sosmed[key].text}  link={resumeData.sosmed[key].link} />
               ))}
               </CostumTimeLine>
               <br/>
               <div className='button_container'>
               <CostumButton text={'Download Cv'} icon={<GetAppIcon/>}/>
               </div>
             
           </div>
        </div>
    )
}

export default Profiles
