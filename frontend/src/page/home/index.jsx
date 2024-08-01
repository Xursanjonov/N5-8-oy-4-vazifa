import { memo, useEffect, useState } from 'react'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import UserCart from '../../components/user-cart'
import Loading from '../../components/loading';
import './home.css'

const Home = () => {
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [users, setUsers] = useState(null)
    const fetchData = (api) => {
        fetch(`${api}/users?limit=${limit}&skip=${page - 1}`).then(res => res.json())
            .then(data => setUsers(data))
            .catch(er => console.error(er))
    }
    const handleChange = (_, value) => {
        console.log(value)
        setPage(value)
    }

    const lengthPage = React.useMemo(() => (Math.ceil(users?.total / limit)))

    useEffect(() => {
        fetchData('http://localhost:8000')
        console.log(users)
    }, [])
    useEffect(() => {
        fetchData('http://localhost:8000')
        console.log(users)
    }, [page])

    return (
        <section>
            <div className="wrapper">
                {
                    !users ? <Loading /> :
                        users?.payload?.map(user => (
                            <UserCart key={user?.id} user={user} />
                        ))
                }
            </div>
            <Stack className="home__stack" key={'stack'} spacing={2}>
                <Pagination key={'pagination'} count={lengthPage} page={page} onChange={handleChange} />
            </Stack>
        </section>
    )
}

export default memo(Home)