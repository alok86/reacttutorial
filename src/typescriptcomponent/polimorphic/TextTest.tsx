import React from 'react'
import { Text } from './Text'

export const TextTest = () => {
  return (
    <>
    <Text as='h1' size='lg'>Heading</Text>
    <Text as='p' size='md'>Paragraph</Text>
    <Text as='label' size='sm' color='secondary'>Label</Text>
    </>
  )
}
