import '../models/connection.js';
import assaignprojectSchemaModel from '../models/assaignproject.model.js';
import url from 'url'


export const save=async(req,res,next)=>{
var assaignprojectList=await assaignprojectSchemaModel.find().sort({"_id":-1});
var _id=(assaignprojectList.length==0?1:assaignprojectList[0]._id+1);
var assaignprojectDetails={...req.body,"_id":_id};
var p =await assaignprojectSchemaModel.create(assaignprojectDetails);
 if(p)
      return res.status(201).json({"status":true});
  else
      return res.status(500).json({"status": false});
  
  }

  export const fetch=async (req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var assaignprojectList = await assaignprojectSchemaModel.find(condition_object);
    if(assaignprojectList.length!=0)
    return res.status(201).json(assaignprojectList);
    else
    return res.status(500).json({"result":"Server Error"});
    //return res.status(201).json(tasksubmissionList);
 }

 export const deleteteassaignproject=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var assaignprojectList = await assaignprojectSchemaModel.find(condition_obj);
  if(assaignprojectList.length!=0){
    let result = await assaignprojectSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});
}

export const updateassaignproject=async(req,res,next)=>{
  let assaignprojectDetails = await assaignprojectSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(assaignprojectDetails){
     let result=await assaignprojectSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
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

