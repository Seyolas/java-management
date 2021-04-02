package eif.viko.lt.sample.stack.demo.service;

import eif.viko.lt.sample.stack.demo.model.Employee;
import eif.viko.lt.sample.stack.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Integer employeeID) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeID);
        if (employeeOptional.isPresent()) {
            return employeeOptional.get();
        } else {
            return null;
        }
    }

    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    public Employee updateEmployeeById(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployeeById(Integer employeeID) {
        employeeRepository.deleteById(employeeID);
    }
}
