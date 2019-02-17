import axios from 'axios'
const instance =axios.create({
    baseURL:`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
    timeout:1000,
    headers:{
        'X-Requested-With': 'XMLHttpRequest'
    }
    

})
export default instance
//创建axios实例