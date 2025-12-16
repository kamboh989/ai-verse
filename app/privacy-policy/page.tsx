import React from 'react'
import Lines from "./lines";
import { privacySEO } from './seo';
import { Metadata } from 'next';

export const metadata: Metadata = privacySEO;

const page = () => {
  return (
    <div>
        <Lines />
    </div>
  )
}

export default page
