import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh',
    timeout:5000
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config =>{
    console.log(config);
    //1.比如说config中的一些信息不符合服务器要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.比如某些网络请求，（比如登录（token）），必须携带一些特殊的信息
    return config
  },err =>{
    console.log(err);
  })
  //2.2 相应拦截
  instance.interceptors.response.use(res =>{
    console.log(res);
    console.log(res.data);
    return res.data
  },err =>{
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
}


// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000/api/wh',
//       timeout:5000
//     })
//     instance(config)
//       .then(res =>{
//         resolve(res)
//       })
//       .catch(err =>{
//         reject(err)
//       })
//   })
// }

// export function request(config,success,failure) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000/api/wh',
//     timeout:5000
//   })
//   instance(config)
//     .then(res =>{
//       // console.log(res);
//       success(res)
//     })
//     .catch(err =>{
//       console.log(err);
//       failure(err)
//     })
// }
