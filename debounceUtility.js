function debounce(func, delay = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this,args)},delay);
    }
}

const saveInput = (args) => console.log(args.target.value);
const processChange = debounce(saveInput,500);