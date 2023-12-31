import CardProps from './CardProps'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Card() {
    const [title, setTitle] = useState()
    const [body, setbody] = useState()
    const title1 = localStorage.getItem("title")
    const body1 = localStorage.getItem("body")
    const id = localStorage.getItem("id")
    useEffect(() => {
        axios.get(`https://64876d1ebeba62972790a0f0.mockapi.io/data/users/${id}`).then(res => {
            setTitle(res.data.title)
            setbody(res.data.body)
        })

    }, [])
    return (
        <div>
            <CardProps title={title1} body={body1}></CardProps>

        </div>
    )
}
