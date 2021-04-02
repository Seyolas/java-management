package eif.viko.lt.sample.stack.demo.controller;

import eif.viko.lt.sample.stack.demo.model.Employee;
import eif.viko.lt.sample.stack.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @ResponseBody
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @ResponseBody
    @GetMapping(value = "/{id}")
    public Employee getEmployeeById(@PathVariable("id") Integer employeeID) {
        return employeeService.getEmployeeById(employeeID);
    }

    @PostMapping
    public void saveEmployee(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
    }

    @PutMapping
    public void updateEmployeeInformation(@RequestBody Employee employee) {
        employeeService.updateEmployeeById(employee);
    }

    @DeleteMapping(value = "/{id}")
    public void removeEmployee(@PathVariable("id") Integer employeeID) {
        employeeService.deleteEmployeeById(employeeID);
    }
}
