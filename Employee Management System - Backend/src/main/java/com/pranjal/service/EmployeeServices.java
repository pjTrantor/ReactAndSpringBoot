package com.pranjal.service;

import com.pranjal.entity.EmployeeModel;
import com.pranjal.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepo employeeRepo;

    public EmployeeModel saveEmployeeDetails(EmployeeModel employeeModel){
        return employeeRepo.save(employeeModel);
    }
}
