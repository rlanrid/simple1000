import React from 'react'
import RepleWrite from './RepleWrite'
import RepleList from './RepleList'
import { useSelector } from 'react-redux'


const RepleArea = (props) => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <>
                <RepleList postId={props.postId} />
                {user.accessToken &&
                    <RepleWrite postId={props.postId} />
                }
            </>
        </div>
    )
}

export default RepleArea
