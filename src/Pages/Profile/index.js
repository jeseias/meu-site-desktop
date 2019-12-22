import React, { useState, useMemo } from 'react' 

import { MdCameraAlt } from 'react-icons/md'

import { MainTitle } from '../../Styles/typografy'
import { ContentBox, FormInput, FormArea  } from '../../Styles/components'
import { Container } from './styles'

export default () => {
  const [thumbnail, setThumbnail] = useState(null)
  const [location, setLocation] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')
  const [projects, setProjects] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null 
  },[thumbnail])

return (

  <Container className="PageContent"> 
    <form>
      <MainTitle> Sobre <div id="infinity"></div> </MainTitle>
      <ContentBox className="me"> 
        <div 
          className="img" 
          id="thumbnail" 
          style={{ backgroundImage: `url(${preview})` }}
          className={thumbnail ? 'img hasThumbnail' : 'img'}>
            
          <div className="upload">
            <input type="file" onChange={e => setThumbnail(e.target.files[0])}/>
            <MdCameraAlt size={28}/>
          </div>
        </div>  
        <div className="details">
          <h3>Jeseías Domingos</h3>
          <p className="location"> 
            <FormInput name="location" placeholder="location" type="text"/>
          </p>
          <FormArea name="info1" placeholder="Information one" />
          <FormArea name="info2" placeholder="Information two" /> 
        </div>
      </ContentBox>
    </form>
  </Container>

)
}