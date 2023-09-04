import React, { useState } from 'react';
import PropsEx from './PropsEx';
import UserData from './UsersData.js'

const UserDashboard = () => {
    const [userData, setUserData] = useState(UserData);

    return (
        <>
            <PropsEx userData={userData} />
        </>
    )
}

export default UserDashboard