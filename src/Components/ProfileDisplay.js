import Profile from './Profile';
import {useEffect, useState} from 'react'

function ProfileDisplay() {
    const [getFull, setGetFull] = useState([]);

    const fetchData = () => {
      fetch("http://localhost:3000/registers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetFull(data)
      });
    };
  
    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <div>
        {getFull.map((profile) => {
            return (
                <Profile profile={profile} />
            )
        })}
    </div>
  )
}

export default ProfileDisplay