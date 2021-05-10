import { useSelector } from 'react-redux';

const ProfileForm = () => {
    
    const isLogged = useSelector(state => state.isLogged);

    const username = useSelector(state => state.username);

    // if(isLogged) {
    //     return ThanksDisplay(username);
    // } else {
    //     return ProfileDisplay();
    // };

    return(
        <h3>User Management for {username}</h3>
    )
  
};

export { ProfileForm }