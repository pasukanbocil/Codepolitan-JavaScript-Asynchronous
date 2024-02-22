const delayedColorChange = (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    });
};

delayedColorChange('red',1000)
.then(()=>{
    return delayedColorChange('orange',1000);
})
.then(()=>{
    return delayedColorChange('yellow',1000);
})
.then(()=>{
    return delayedColorChange('green',1000);
})
.then(()=>{
    return delayedColorChange('blue',1000);
})
.then(()=>{
    return delayedColorChange('indigo',1000);
})