import React from 'react'
import { Layout } from '../../components/Layout/LayoutStyle'
import NavBar from '../../components/navBar/NavBar'
import GoBackMoreHeader from '../../components/GoBackMoreHeader'

export default function Chat() {
  return (
    <Layout>
        <GoBackMoreHeader></GoBackMoreHeader>
        <NavBar></NavBar>
    </Layout>
  )
}
