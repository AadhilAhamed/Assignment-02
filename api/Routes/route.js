const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Endpoint_1 - GET'
    });
    
});
router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Endpoint_2 - POST'
    });
});
router.put('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Endpoint_3 - PUT'
    });
});
router.patch('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Endpoint_4 - Patch'
    });
});
router.delete('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Endpoint_4 - DELETE'
    });
});

module.exports = router;