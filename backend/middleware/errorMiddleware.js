const errorHandler = (err, req, rest, next)=>{
    const statusCode = res.statusCode ? rest.statusCode : 500
    rest.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
}

module.exports={
    errorHandler
}