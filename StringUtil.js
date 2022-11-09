const append = (str, suffix) => str + suffix;
const fetchNaver = () => {
    const url = 'https://www.naver.com';
    axios.get(url)
        .then((response) => {
            console.log("ok");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export { append , fetchNaver};

