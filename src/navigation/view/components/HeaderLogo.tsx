import Link from 'next/link'
import React from 'react'

export default function HeaderLogo() {
  return (
    <h1 className="font-display font-light italic text-3xl transform -translate-y-0.5">
      <Link href="/">Devs for Change</Link>
    </h1>
  )
}
