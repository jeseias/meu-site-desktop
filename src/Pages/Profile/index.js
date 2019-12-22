import React, { useState, useMemo } from 'react' 

import api from '../../services/api'

import { MdCameraAlt } from 'react-icons/md'

import { MainTitle } from '../../Styles/typografy'
import { ContentBox, FormInput, FormArea, AwesomeBTN  } from '../../Styles/components'
import { Container } from './styles'

export default () => {
  const [thumbnail, setThumbnail] = useState(null)
  const [location, setLocation] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('') 

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null 
  },[thumbnail])

  async function handleSubmit(e) {
    e.preventDefault()

    const data = new FormData() 

    data.append('thumbnail', thumbnail)
    data.append('location', location)
    data.append('info1', info1)
    data.append('info2', info2)

    const userid = localStorage.getItem('userid')
    await api.patch('/update', data, {
      headers: {userid}
    }) 
  }

return (

  <Container className="PageContent"> 
    <form onSubmit={handleSubmit}>
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
            <FormInput  
              placeholder="location" 
              value={location}
              onChange={e => setLocation(e.target.value)}
              type="text"/>
          </p>
          <FormArea 
            placeholder="Information one" 
            value={info1}
            onChange={e => setInfo1(e.target.value)}
            />
          <FormArea 
            placeholder="Information two"
            value={info2}
            onChange={e => setInfo2(e.target.value)} 
            /> 
        </div>
        <AwesomeBTN type="submit"> Enviar </AwesomeBTN>
      </ContentBox>
    </form>
  </Container>

)
}