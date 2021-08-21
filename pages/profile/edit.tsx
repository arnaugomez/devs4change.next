import React from 'react'
import MaxWidth from '../../src/common/view/components/atoms/MaxWidth'
import EditProfileForm from '../../src/user/view/components/EditProfileForm'
import EditProfileFormIntro from '../../src/user/view/components/EditProfileFormIntro'

export default function EditProfilePage() {
  return (
    <section className="px-4 pt-12">
      <MaxWidth>
        <EditProfileFormIntro />
        <EditProfileForm />
      </MaxWidth>
    </section>
  )
}
