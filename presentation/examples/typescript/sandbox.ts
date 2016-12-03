interface Employee2 {
    name: string;
    salary?: number;
}

var a: Employee2 = { name: 'Bob', salary: 40000 }; // OK
var b: Employee2 = { name: 'Bob' }; // OK
var c: Employee2 = { name: 'Bob', salary: undefined }; // OK
var d: Employee2 = { name: null }; // Not OK, salary must be a number

// OK, but doesn't make too much sense
class SomeEmployeeA implements Employee2 {
    public name = 'Bob';
}