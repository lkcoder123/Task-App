const jwt = require('jsonwebtoken')

const myfunc = async () => {
    const token = jwt.sign({_id: "Lal"}, 'thisismynewcourse')
    const decoded = jwt.verify(token,'thisismyewcourse')
    
    // console.log(decoded)
}

myfunc().then( () => {

}).catch( (e) => {
    console.log(e)
})