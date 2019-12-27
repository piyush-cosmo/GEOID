module.exports = function(app,port){
//specif other routes here
app.get('/',(req,res)=>{
res.send(`started on port:${port}`)
})


}

