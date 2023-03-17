const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.header.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    }catch(error){
        console.log(error);
    }
};

module.exports = {auth};