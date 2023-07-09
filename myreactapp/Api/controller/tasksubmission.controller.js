import '../models/connection.js';
import tasksubmissionSchemaModel from '../models/tasksubmission.model.js';
import url from 'url'


export const save=async(req,res,next)=>{
var tasksubmissionList=await tasksubmissionSchemaModel.find().sort({"_id":-1});
var _id=(tasksubmissionList.length==0?1:tasksubmissionList[0]._id+1);
var tasksubmissionDetails={...req.body,"_id":_id};
var p =await tasksubmissionSchemaModel.create(tasksubmissionDetails);
 if(p)
      return res.status(201).json({"status":true});
  else
      return res.status(500).json({"status": false});
  
  }

  export const fetch=async (req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var tasksubmissionList = await tasksubmissionSchemaModel.find(condition_object);
    if(tasksubmissionList.length!=0)
    return res.status(201).json(tasksubmissionList);
    else
    return res.status(500).json({"result":"Server Error"});
    //return res.status(201).json(tasksubmissionList);
 }

 export const Deletetasksubmission=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var tasksubmissionList = await tasksubmissionSchemaModel.find(condition_obj);
  if(tasksubmissionList.length!=0){
    let result = await tasksubmissionSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});
}

export const Updatetasksubmission=async(req,res,next)=>{
  let tasksubmissionDetails = await tasksubmissionSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(tasksubmissionDetails){
     let result=await tasksubmissionSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(result)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}

/*export const login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  if(userList.length!=0)
  {
    let payload={"subject":userList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return res.status(500).json({"token": "error"});
}*/

