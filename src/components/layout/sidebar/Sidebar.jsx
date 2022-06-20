import React from 'react'
import './sidebar.css'
import LyricsIcon from '@mui/icons-material/Lyrics';
import Typography from '@mui/material/Typography';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    
   <div className="container">
    <span className='libraryText'>Library</span>
   <div className='songBtn'>
    <LyricsIcon sx={{mt:"0.3rem"}} className='songIcon'/>
    <Button sx={{color:"#fffcf7"}} variant="text">Songs</Button>
    </div>
    <div className='songBtn'>
    <LibraryMusicIcon sx={{mt:"0.3rem"}} className='songIcon'/>
    <Button sx={{color:"#fffcf7"}} variant="text">Albums</Button>
    </div>
    <div className='songBtn'>
    <AlbumIcon sx={{mt:"0.3rem"}} className='songIcon'/>
    <Button sx={{color:"#fffcf7"}} variant="text">Artists</Button>
    </div>
   </div>
    
   

    </div>
  )
}

export default Sidebar