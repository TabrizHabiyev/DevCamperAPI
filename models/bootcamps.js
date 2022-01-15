const mongoose = require('mongoose');
const slugify = require('slugify');
const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be than 50 charachter'],
    },

    slug: String,

    description:{
        type: String,
        required: [true, 'Please enter description'],
        trim: true,
        maxlength: [500, 'Description can not be than 500 charachter'],
    },

    website:{
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP OR HTTPS'
        ]
    },

    phone:{
       type:String,
       maxlength:[20, 'Phone number can not longer than 20 characters']
    },

    email:{
       type: String,
       match:[
           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
           'Please add a valid email'
       ]
    },

    address:{
        type:String,
        required: [true, 'Please add an address']
    },

    location:{
        //GeoJSON Point
        type: {
            type: String, 
            enum: ['Point'], 
            required: false
          },
          coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere',
          },
            formattedAddress: String,
            street: String,
            city: String,
            state: String,
            zipcode: String,
            country: String
          },

          careers:{
              // Array of string
              type: [String],
              required: true,
              enum:[
                  'Web Development',
                  'Mobile Development',
                  'UI/UX',
                  'Data Science',
                  'Business',
                  'Other'
              ]
          },

          avvarangeRating:{
              type:Number,
              min:[1,'Rating must be at least 1'],
              max:[10,'Rating must be at least 10'],
          },

          avvarangeCost: Number,

          photo:{
              type: String,
              default:'no-photo.jpg',
          },

          housing:{
              type: Boolean,
              default: false
          },

          jobAssistance:{
             type: Boolean,
             default: false
          },

          jobGuarantee:{
              type: Boolean,
              default: false
          },

          acceptGi:{
             type: Boolean,
             default: false
          },

          createdAt:{
              type: Date,
              default:Date.now
          }
});


// Create bootcamp slug from the name
BootcampSchema.pre('save' , function(next){
   this.slug = slugify(this.name,{lower:true})
    next();
})

module.exports = mongoose.model('Bootcamp', BootcampSchema);