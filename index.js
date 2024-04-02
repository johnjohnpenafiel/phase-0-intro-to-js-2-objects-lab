// Write your solution in this file!

const employee = {
name : "Carlos",
streetAddress : "Apple Dr"
}

function updateEmployeeWithKeyAndValue (obj, key, value){
    return {...obj,[key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value){
     obj[key] = value;
     return obj;
}

let newEmployee = deleteFromEmployeeByKey(employee, 'name')

function deleteFromEmployeeByKey(obj, key){
    let newEmployee = {...obj};
    delete newEmployee[key]
    return newEmployee
}

function  destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

