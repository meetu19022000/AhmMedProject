import { Router } from "express";
import { sample_products, sample_tags } from "../data";
import  asyncHandler from 'express-async-handler';
import { Product, ProductModel } from "../models/product.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
const router = Router();

router.get("/seed", asyncHandler(
    async(req,res) => {
        const productsCount = await ProductModel.countDocuments();
        if (productsCount > 0){
            res.send("Seed is already done!");
            return;
        }

        await ProductModel.create(sample_products);
        res.send("Seed is Done!");
    }
 ))

router.get("/",asyncHandler(
    async (req,res) => {
        const products = await ProductModel.find();
        res.send(products);
    }
))

router.get("/search/:searchTerm", asyncHandler( 
    async (req,res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i'); // will make searchTerm case insensitive
        const products = await ProductModel.find({name: {$regex:searchRegex}});
        res.send(products);
    }
))

router.get("/tags", asyncHandler( 
    async (req,res) =>{
        const tags = await ProductModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count: -1}); // count: -1 , decreasing order
        const all = {
            name: 'All',
            count: await ProductModel.countDocuments()
        }
        tags.unshift(all); //unshift add to the beginning
        res.send(tags);
    }
))

router.get("/tags/:tag",asyncHandler( 
    async (req,res) => {
        const products = await ProductModel.find({tags: req.params.tag});
        res.send(products);
    }
))

router.get("/:productId", asyncHandler( 
    async (req,res) => {
        const products = await ProductModel.findById(req.params.productId);
        res.send(products);
    }
))

router.post('/add', asyncHandler(
    async(req,res) => {
        const {name, shortDescription, stars, rating,  price, imageUrl, tags} = req.body;
        const product = await ProductModel.findOne({name});
        if(product){
            res.status(HTTP_BAD_REQUEST).send('Product already exist, please try again');
        }
        else{
            const newProduct:Product = {
                id:'',
                name,
                shortDescription,
                stars,
                rating,
                price,
                imageUrl,
                tags
            }

            const dbProduct = await ProductModel.create(newProduct);
            res.send(dbProduct);
        }
    }
))

export default router;