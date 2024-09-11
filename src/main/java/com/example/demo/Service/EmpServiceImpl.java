package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmpRepo;
@Service("empservice")
public class EmpServiceImpl implements EmpService
{
    @Autowired
    EmpRepo emprepo;
	@Override
	public Employee isAddEmp(Employee emp) {
	   return emprepo.save(emp);
	}
	@Override
	public List<Employee> getAllEmp() {
		List<Employee> list=emprepo.findAll();
		return list;
	}
	@Override
	public String isDelEmp(int eid) {
	    Optional<Employee> o=emprepo.findById(eid);
	    if(o.isEmpty())
	    {

			return "Emp not exits";
		}
		else
		{
			emprepo.deleteById(eid);
			return "Emp Deleted Successfully..";
		}
	}
	@Override
	public Employee getPlayerById(int eid) {
	     Optional<Employee> o=emprepo.findById(eid);
	     if(o.isEmpty())
	     {
	    	 return null;
	     }
	     else
	     {
	    	 return o.get();
	     }
	}
	@Override
	public String isupdateEmp(Employee emp, int eid) {
		Optional<Employee> o=emprepo.findById(eid);
		if(o.isEmpty())
		{
			return "Emp not exists";
		}
		else
		{
		  	Employee e=emprepo.save(emp);
		  	if(e!=null)
		  	{
		  		return "Emp updated Successfully...";
		  	}
		  	else
		  	{
		  		return "Emp not updated...";
		  	}
		}
		
	}
	@Override
	public List<Employee> getEmpByName(String name) {
		List<Employee> list=emprepo.findByNameLike(name);
		return list;
	}
	

}
