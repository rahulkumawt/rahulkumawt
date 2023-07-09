import '../models/connection.js';
import ProjectSchemaModel from '../models/project.model.js';
import url from 'url';


export const save=async (req,res,next)=>{
 var projectList=await ProjectSchemaModel.find().sort({"_id":-1});
 var _id=(projectList.length==0?1:projectList[0]._id+1);

  var projectDetails ={...req.body,"_id":_id};

 var project = await ProjectSchemaModel.create(projectDetails);
  if(project)
  return res.status(201).json({"status":true});
else
  return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var projectList = await ProjectSchemaModel.find(condition_object);
  if(List.length!=0)
    return res.status(201).json(userList);
  else
  return res.status(500).json({"result": "Server Error"});
}
export const deleteProject=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var project = await ProjectSchemaModel.find(condition_obj);
  if(project.length!=0){
    let result = await ProjectSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}

export const updateProject=async(req,res,next)=>{
  let projectDetails = await ProjectSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(projectDetails){
     let result=await ProjectSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(result)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}


