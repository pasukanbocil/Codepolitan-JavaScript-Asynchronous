const hello = async () => {

    throw "Maaf gak kenal";
    // return "Hello";
    };


    hello().then((res) => {
        console.log('response',res);
    })
    .catch((err) => {
        console.log('error',err);
    });