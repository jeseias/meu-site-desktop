import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

// components
import ImageInput from '../../components/ImageInput'

// Images
import me2 from '../../assets/me2.jpg'

// Styles
import { MainTitle } from '../../Styles/typografy' 
import { AwesomeBTN, FormArea } from '../../Styles/components' 
import { Container, FormInput } from './styles'

export default ({ history }) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [thumbnail, setThumbnail] = useState(null) 

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null 
  },[thumbnail])

  async function handleSubmit(e){
    e.preventDefault()  
    
    try {
      let data = new FormData()
  
      data.append('name', name)
      data.append('location', location)
      data.append('info1', info1)
      data.append('info2', info2)
      data.append('email', email)
      data.append('password', password)
      data.append('thumbnail', thumbnail)

      const user = await api.post('/register', data)  
      alert('Usario criado com succesoo !!!')
      history.push('/login')
    } catch (error) {
      console.log('Error:', error)
      alert("Wrong data")
    } 
  }

return ( 
  <Container img={me2}>  
    <MainTitle> Cria um nova conta <div id="infinity"></div> </MainTitle>

    <form onSubmit={handleSubmit}>
      <div className="box1"> 
        <ImageInput cl="img" bgImg={preview} thumbnail={thumbnail} setThumbnail={setThumbnail}/>
        <FormInput 
          type="text" 
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)} 
        /> 
        <FormInput 
          type="text" 
          placeholder="Seu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormInput 
          type="password" 
          placeholder="Sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='box2'>
        <FormInput 
          type="text" 
          placeholder="Onde Moras"
          value={location}
          onChange={e => setLocation(e.target.value)} 
        />
        <FormArea  
          placeholder="Infromação sobre se"
          value={info1}
          onChange={e => setInfo1(e.target.value)} 
        />
        <FormArea  
          placeholder="Mais informações sobre se"
          value={info2}
          onChange={e => setInfo2(e.target.value)} 
        />
      </div>
      <AwesomeBTN className='btn'> Entrar </AwesomeBTN>
    </form>  
  </Container>
)}