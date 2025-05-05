import { User as UserModel, Response } from "@core/api";
import { useEffect, useState } from "react";

const User = () => {

    const [user, setUser] = useState({});

    useEffect(() => {

        fetch('http://localhost:8080/api/users/list', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then((response: Response<UserModel[]>) => {

                if (!response.success) {
                    alert(response.resultMessage.message);
                    return;
                }

                setUser(response.data);

            })

    }, []);

    return (
        <div>
            <h1>User</h1>
        </div>
    );
}

export default User;