package com.pranjal.service;

import com.pranjal.entity.EmployeeModel;
import com.pranjal.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepo employeeRepo;

    public EmployeeModel saveEmployeeDetails(EmployeeModel employeeModel){
        return employeeRepo.save(employeeModel);
    }

    public List<EmployeeModel> getEmployeeDetails(){
        return employeeRepo.findAll();
    }
}
