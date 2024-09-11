package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.EmpServiceImpl;
import com.example.demo.model.Employee;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class homeController 
{
  @Autowired
  EmpServiceImpl empservice;

  @PostMapping("/saveemp")
  public String isaddEmp(@RequestBody Employee emp)
  {
	  Employee e=empservice.isAddEmp(emp);
	  return e!=null?"Employee addedd successfully...":"Employee not addedd successfully...";
  }
  @GetMapping("/getemp")
  public List<Employee> getAllEmp()
  {
	  List<Employee> list=empservice.getAllEmp();
	  return list;
  }
  @GetMapping("/delemp/{empid}")
  public String delEmp(@PathVariable("empid") Integer eid)
  {
	  String s=empservice.isDelEmp(eid);
	  return s;
  }
  @GetMapping("/searchemp/{eid}")
  public Employee getEmpById(@PathVariable("eid") Integer eid)
  {
	  Employee e=empservice.getPlayerById(eid);
      if(e!=null)
      {
    	  return e;
      }
      else
      {
    	  return null;
      }
  }
  @PutMapping("/updemp/{eid}")
  public String isupdEmp(@RequestBody Employee emp, @PathVariable("eid") Integer eid)
  {
	  String s=empservice.isupdateEmp(emp, eid);
	  return s;
  }
  @GetMapping("/searchbyname/{name}")
  public List<Employee> getbyname(@PathVariable String name)
  {
	  List<Employee> list=empservice.getEmpByName(name);
	  if(list!=null)
	  {
		  return list;
	  }
	  else
	  {
		  return null;
	  }
  }
}
