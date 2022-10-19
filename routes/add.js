const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', (req, res)=>{
    res.render('add',{
        title: 'Add course',
        isAdd: true,
    });
})
router.post('/', (req, res)=>{
    console.log(req.body)
    const course = new Course(req.body.title, req.body.price , req.body.img);
    res.redirect('/course/list')
})


module.exports = router