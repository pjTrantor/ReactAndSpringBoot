package com.pranjal.controller;

import com.pranjal.entity.EmployeeModel;
import com.pranjal.service.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    EmployeeServices employeeServices;

    @PostMapping()
    public EmployeeModel saveEmployeeDetails(@Valid @RequestBody EmployeeModel employeeModel){
        return employeeServices.saveEmployeeDetails(employeeModel);
    }

    @GetMapping()
    public List<EmployeeModel> getEmployeeDetails(){
        return employeeServices.getEmployeeDetails();
    }

}
