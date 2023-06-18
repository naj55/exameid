import React from 'react'
import { ChakraProvider, Flex, Text, Image, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import Img from '../assets/card.jpg'

export default function CardProps(props) {
    return (
        <div>
            <Flex justifyContent="center" alignItems="center" >
                <Flex justifyContent="center" alignItems="center" w="40em" h="30em" mt="10em" border="2px solid" borderColor="#323131" borderRadius="5em" direction="column">
                    <Image src={Img} w="25em" h="18em" borderRadius="2em" mt="-6em"></Image>
                    <Heading id="Heading" >{props.title}</Heading>
                    <Text>{props.body}</Text>
                </Flex>
            </Flex>
        </div>
    )
}
