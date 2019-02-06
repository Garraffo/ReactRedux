export const selectUser = (user) => {
    console.log('clickeaste a: ' + user.apellido + ', ' + user.nombre);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};


