import React from 'react'
import { useLogoutRedirect } from '../../src/user/view/hooks/useLogoutRedirect'

export default function Profile() {
  useLogoutRedirect()
  return (
    <div>
      Profile
      
    </div>
  )
}
