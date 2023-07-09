import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const assaignprojectSchema = mongoose.Schema({
  _id: Number,
  assaignid:{
    type:String,
    required:[true,"project is required"],
    lowercase:true,
    unique:true,
    trim:true
  },
  ptitle:{
    type:String,
    required:[true,"project title is required"],
    lowercase:true,
    trim:true
  },
  pgroup:{
    type:String,
    required:[true,"project group is required"],
    lowercase:true,
    trim:true
  },
  pstartdeath:{
    type:String,
    required:[true,"project startdeath is required"],
    lowercase:true,
    trim:true
  },
  penddeath:{
    type:String,
    required:[true,"project enddeath is required"],
    lowercase:true,
    trim:true
  },
  pinfo:{
    type:String,
    required:[true,"project info is required"],
    lowercase:true,
    trim:true
  }
});

// Apply the uniqueValidator plugin to UserSchema
assaignprojectSchema
assaignprojectSchema.plugin(uniqueValidator);

// compile schema to model
const assaignprojectSchemaModel = mongoose.model('assaignproject_collection',assaignprojectSchema);

export default assaignprojectSchemaModel
