const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express()
const path = require('path');
const port = 80


app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/layouts'
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

registerRoots()


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function registerRoots() {
    
    app.get('/sbx', (req, res) => {
        let _aid = req.query.aid
        if (_aid) {
            res.render('index', { aidval: _aid })
        } else {
            res.render('error', )
        }
        
    })
}



/* <body>
    <form id="form" action="https://www.solebox.com/index.php?" method="post">
        <input type="hidden" name="lang" value="1">
        <input type="hidden" name="cl" value="basket">
        <input type="hidden" name="fnc" value="tobasket">
        <input type="hidden" name="am" value="1">
        <input type="hidden" name="aid" value="45445">
    </form>
</body>

<script>
    document.getElementById("form").submit();
</script> */
