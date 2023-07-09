import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const tasksubmissionSchema= mongoose.Schema({
_id: Number,
info:{
 type:String,
 required:[true,"submission info is required"],
 lowercase:true,
 unique:true,
 trim:true
},

submissiontitle:{
    type:String,
    required:[true,"submission title is required"],
    lowercase:true,
    trim:true
   },
  
   gname:{
    type:String,
    required:[true,"submission group name is required"],
    lowercase: true,
    trim: true
   },

  submissiondescription:{
    type:String,
    required:[true,"submission description is required"],
    lowercase: true,
    trim: true
   },

   filename:{
    type:String,
    required:[true,"submission filename is required"],
    lowercase: true,
    trim: true
   }
  });

//Apply the uniqueValidator plugin to TasksubmissionSchema.
tasksubmissionSchema
tasksubmissionSchema.plugin(uniqueValidator);

// compile schema to model
const tasksubmissionSchemaModel = mongoose.model('tasksubmission_collection',tasksubmissionSchema);

export default tasksubmissionSchemaModel