import express from 'express'
import  Products  from '../models/Product.js'

const router = express.Router()

// read all
router.get('/', (req, res) =>{
    Products.find()
    .then(products=>{
        res.status(200).json({result:products})
    })
});

//read one
router.get('/:id', (req, res) => {
    const {id} = req.params
    Products.findById(id)
    .then(prod=>{
        res.status(200).json({result:prod})
    })
});

//create
router.post('/:id', (req, res) => {
    let {body} = req
    Products.create(body)
    .then(newProd=>{
        res.status(200).json({result:newProud})
    })
});

//update
router.patch('/', (req, res) => {
    let {body} = req
    Products.findByIdAndUpdate(body, {new:true})
    .then(mod=>{
        res.status(204).json({result:mod})
    })
});

//delete
router.delete('/:id', (req, res) => {
    let {id} = req.params
    Products.findByIdAndDelete(id)
    .then(()=>{
        res.status(204).json({message:"Borrado"})
    })
});

export default router