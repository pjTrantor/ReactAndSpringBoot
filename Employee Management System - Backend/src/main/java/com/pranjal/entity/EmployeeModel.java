package com.pranjal.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeModel {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Integer employeeId;
    @NotNull
    String firstName;
    @NotNull
    String lastName;
    @NotNull
    String email;


}
