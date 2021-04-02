package eif.viko.lt.sample.stack.demo.repository;

import eif.viko.lt.sample.stack.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
