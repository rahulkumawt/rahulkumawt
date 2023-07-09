import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const assigntaskSchema = mongoose.Schema({
  _id: Number,
  tasktitle:{
    type:String,
    required:[true,"task title is required"],
    lowercase:true,
    unique:true,
    trim:true
  },
  taskdescription:{
    type:String,
    required:[true,"task description is required"],
    lowercase:true,
    trim:true
  }
});

// Apply the uniqueValidator plugin to UserSchema
assigntaskSchema
assigntaskSchema.plugin(uniqueValidator);

// compile schema to model
const assigntaskSchemaModel = mongoose.model('assigntask_collection',assigntaskSchema);

export default assigntaskSchemaModel
