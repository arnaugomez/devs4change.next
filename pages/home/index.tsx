import React from 'react'
import { useLogoutRedirect } from '../../src/user/view/hooks/useLogoutRedirect'

export default function Home() {
  useLogoutRedirect();
  return (
    <div>
      Home
    </div>
  )
}
