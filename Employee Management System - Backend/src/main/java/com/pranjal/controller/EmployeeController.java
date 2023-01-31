package com.pranjal.controller;

import com.pranjal.entity.EmployeeModel;
import com.pranjal.service.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeServices employeeServices;

    @PostMapping("/Save")
    public EmployeeModel saveEmployeeDetails(@Valid @RequestBody EmployeeModel employeeModel){
        return employeeServices.saveEmployeeDetails(employeeModel);
    }
}
