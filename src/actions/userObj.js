import React from 'react'

function userObj(user) {
    console.log(user);
    return {
        type: 'userObject',
        payload: user
    }
}

export default userObj
