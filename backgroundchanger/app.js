const delayedColorChange = (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    });
};

// delayedColorChange('red',1000)
// .then(()=>{
//     return delayedColorChange('orange',1000);
// })
// .then(()=>{
//     return delayedColorChange('yellow',1000);
// })
// .then(()=>{
//     return delayedColorChange('green',1000);
// })
// .then(()=>{
//     return delayedColorChange('blue',1000);
// })
// .then(()=>{
//     return delayedColorChange('indigo',1000);
// })

async function changeColor(){
    delayedColorChange('red',1000);
    await delayedColorChange('orange',1000);
    await delayedColorChange('yellow',1000);
    await delayedColorChange('green',1000);
    await delayedColorChange('blue',1000);
    await delayedColorChange('indigo',1000);
    await delayedColorChange('violet',1000);
    return "All done!";
}

// changeColor().then((res)=>console.log(res));
async function rainbow(){
    await changeColor();
    console.log("All done! Rainbow has been created!");
}

rainbow();