
export const saveUserDataToLocalStorage = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
};
