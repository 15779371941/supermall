import axios from "axios";
export function request(config){
    const instance=axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',

    })
  instance.interceptors.request.use(config=>{
    return config
  },error => {
return error
  })
  instance.interceptors.response.use(config=>{
    return config
  },error => {
return error
  })
 return instance(config)
}
