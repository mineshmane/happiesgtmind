const httpService=require('../axiosService/Axios');
exports.AddBookSerivce=(data)=>{
    console.log(data);
  return  httpService.PostService('user/addBook',data)
}
exports.GetBookByIdSerivce=(data)=>{
    console.log(data);
  return  httpService.GetService('user/adduser'+data.id,data)
}
exports.GetAllBookSerivce=(data)=>{
    console.log(data);
  return  httpService.GetService('user/adduser',data)
}