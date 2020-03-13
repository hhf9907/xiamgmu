export function debounce(func,delay) {  //监听图片是否加载完成的延时函数
  let timer = null
  return function (...args) {  // 加入...可以传多个
    if(timer) timer = clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}