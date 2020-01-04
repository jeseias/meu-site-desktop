import React from 'react';

import { MdCameraAlt } from 'react-icons/md'

import { Container } from './styles';

export default  ({ cl, bgImg, thumbnail, setThumbnail }) =>   
  <Container 
    className={`${cl} img`} 
    id="thumbnail"
    style={{ backgroundImage: `url(${bgImg})` }}
    className={thumbnail ? 'img hasThumbnail' : 'img'}
  > 
    <div className="upload">
      <input 
        type="file"  
        onChange={e =>  setThumbnail(e.target.files[0]) }
      />
      <MdCameraAlt size={28}/>
    </div>
  </Container>
