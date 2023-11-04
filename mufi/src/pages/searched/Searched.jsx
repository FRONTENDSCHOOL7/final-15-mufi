import React from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import { useParams } from 'react-router-dom';

export default function Searched() {
  const params = useParams();
  alert(params)
  return (
    <Layout>Searched</Layout>
  )
}
