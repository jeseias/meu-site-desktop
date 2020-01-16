import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

// Images
import me2 from '../../assets/me2.jpg'

// Styles
import { MainTitle } from '../../Styles/typografy' 
import { AwesomeBTN } from '../../Styles/components' 
import { Container, FormInput } from './styles'

export default ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault() 

    try {
      const user = await api.post('/authentication', { email, password }) 

      localStorage.setItem('userid', user.data._id) 
      history.push('/pages/dashboard')
    } catch (error) {
      console.log('Error:', error)
      alert("Wrong data")
    }
    
  }

return ( 
  <Container img={me2}> 
    <div className="loginBox">
      <MainTitle> Seja bem vindo de Volta <div id="infinity"></div> </MainTitle>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          placeholder="Seu email aqui"
          value={email}
          onChange={e => setEmail(e.target.value)} 
        /> 
        <FormInput 
          type="password" 
          placeholder="Seu senha aqui"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <AwesomeBTN> Entrar </AwesomeBTN>
      </form>
      <Link className="user-create" to='/adduser'>Criar novo Usuario</Link>
    </div>
    <div className="imgBox" /> 
  </Container>
)}