
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styled from './styles.module.scss'
export function Button() {
  const isUserLoggedIn = false

  return isUserLoggedIn ?
  (
    <button 
      type='button'
      className={styled.button}
    >
      <FaGithub color='#84d361'/>
      Bruno Lebrão
      <FiX color='#737380' className={styled.closeIcon}/>
    </button>
  ) : (
    <button 
      type='button'
      className={styled.button}
    >
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
    
  
}
