// handle promise with async await

function sendPromise(value){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            console.log(value);
            value ? res("got the data") : rej("can't got data")
        }, 2000)
    })
}

async function getPromise(){
    try {
        const data = await sendPromise(true)
        console.log(data);
    } catch (error) {
        console.log("ERROR:" + error);
    }
}

getPromise()