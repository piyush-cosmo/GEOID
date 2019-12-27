module.exports = function(app,port,path){
//specif other routes here
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'../index.html'))
})


}

