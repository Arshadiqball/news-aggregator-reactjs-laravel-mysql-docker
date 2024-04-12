import React from 'react'
import Preferences from './Preferences'

const Profile = () => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  document.title = capitalize('Profile')

  return (
    <div>
      <Preferences />
    </div>
  )
}

export default Profile
