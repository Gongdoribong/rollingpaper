const express = require("express")  //express 라이브러릴르 불러옴. node 에서 불러올 떄 require 씀
const app = express()

app.set("view engine", "ejs")   //앞에껄 뒤에꺼로 쓰겠다
app.set("views", "./views") //템플릿이라고 하는 애들이 views안에 들어가있으니 거기 안에서 꺼내서 써라
app.use(express.static("./static"))

app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.use("/api", require("./api"))
app.get("/", (req, res) => {
    res.render("main")
})






app.listen(12345)
