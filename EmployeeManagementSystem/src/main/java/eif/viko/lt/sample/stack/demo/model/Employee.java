package eif.viko.lt.sample.stack.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String middleName;
    private String address;
    @Enumerated(EnumType.STRING)
    private Department department;
    private String contactNumber;

    public Employee setId(Integer id) {
        this.id = id;
        return this;
    }

    public Employee setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public Employee setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public Employee setMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }

    public Employee setAddress(String address) {
        this.address = address;
        return this;
    }

    public Employee setDepartment(Department department) {
        this.department = department;
        return this;
    }

    public Employee setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
        return this;
    }
}
