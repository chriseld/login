const username = (state = null, action) => {
    switch (action.type) {
        case 'getUsername':
            return (action.payload);
        default:
            return state;
    }
};

export { username }