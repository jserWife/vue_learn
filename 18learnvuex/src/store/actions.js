
export default{
     // aUpateeInfo(context){
    //   setTimeout(()=>{
    //     context.commit('btninfo')
    //   })
    // }
    aUpateeInfo(context,payload){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
                context.commit('btninfo')
                console.log(payload);
                resolve(1111)
              },1000)
        })
      }
}