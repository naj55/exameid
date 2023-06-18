import React from 'react'
import { ChakraProvider, Flex, Input, Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [title, setTitle] = useState()
    const [body, setbody] = useState()
    const Navigate = useNavigate()
    const write = () => {
        axios.post("https://64876d1ebeba62972790a0f0.mockapi.io/data/users", {
            title,
            body
        }).then(res => {
            localStorage.setItem("title", res.data.title)
            localStorage.setItem("body", res.data.body)
            localStorage.setItem("id", res.data.id)
        })

        Navigate("/myCard")
    }
    return (
        <div>
            <Flex justifyContent="center" alignItems='center' gap='2' direction="column">
                <Heading id="Heading2">كل الاحترام و التقدير لكم بفضل جهودكم تم كتابة هذا الكود اتمنى ان تعايدوا احبتكم به ^^</Heading>
                <Flex bg="#929292" w="40em" h="20em" justifyContent="center" alignItems='center' mt="15em" borderRadius="3em" direction="column">

                    <Flex direction="column" w="20em">
                        <Input name="title" placeholder="الرجاء كتابة التهنئه" onChange={(e) => setTitle(e.target.value)} mb="1em"></Input>
                        <Input name="body" placeholder='الرجاء كتابة اسمك' onChange={(e) => setbody(e.target.value)} mb="1em"></Input>
                        <Button onClick={write} colorScheme='gray'>كتابة</Button>
                    </Flex>
                </Flex>
            </Flex>


        </div>
    )
}
