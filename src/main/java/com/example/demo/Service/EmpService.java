package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Employee;

public interface EmpService 
{
 public Employee isAddEmp(Employee emp);
 public List<Employee> getAllEmp();
 public String isDelEmp(int eid);
 public Employee getPlayerById(int eid);
 public String isupdateEmp(Employee emp,int eid);
 public List<Employee> getEmpByName(String name);
}
