const httpService=require('../axiosService/Axios');
const httpHeader={headers:{
    'Content-Type':'application/json',
    'token':localStorage.getItem('token')

}}
exports.RegisterSerivce=(data)=>{
  let  httpHeader={headers:{
        'Content-Type':'application/json',
        'token':localStorage.getItem('token')
    }}
    console.log(data);
// router.post('/manager/signup',alradyExits.alreadyExists, user.registration);

  return  httpService.PostService('/manager/signup',data,false,httpHeader)
}



exports.GetOneUsersSerivce=(data)=>{
    console.log(data);
  return  httpService.GetService('user/adduser'+data.id,data,httpHeader)
}


exports.GetAllUsersSerivce=(data)=>{
    console.log(data);
  return  httpService.GetService('user/adduser',true,data)
}