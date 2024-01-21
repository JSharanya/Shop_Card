const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true,
        maxlength:[100,"Product name cannot exceed 100 characters"]
    },

    price:{
        type:Number,
        required:true,
        default:0.0
    },

    description:{
        typr:String,
        required:[true,"Please enter product description"]
    },
    ratings:{
        type:String,
        default:0
    },
    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter product category"],
        enum:{
            values:[
                'Electronices',
                'Mobile Phone',
                'Laptops',
                'Accessories',
                'HeadPhones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:"Please select correct catogory"
        }

    },
    seller:{
        type:String,
        required:[true,"Please enter product seller"]
    },
    strock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxlength:[20,'Product stock cannot eceed 20']
    },
    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()

    }
})