import { Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import './Footer.css'

const Footer= () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>{resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Design And Develop by Jaja Valentino
                    <br/>
                    Clone Idea From <a href='https://themeforest.net/user/tavonline'>TravonLine</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
