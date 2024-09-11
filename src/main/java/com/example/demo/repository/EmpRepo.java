package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Employee;
@Repository("emprepo")
public interface EmpRepo extends JpaRepository<Employee, Integer>
{
	List<Employee> findByNameLike(String name);
}
