export default class MockDB  { //this is a service to mock a db, ofcourse this can be easily implemented to work with a real db

    studentList = [{
        "id": 1, 
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    }]

    query(q) {

        if (q === undefined || q.length === 0)
            throw new Error("The query on the mockDB was empty");
        else if (! q.includes("select * from student"))
            throw new Error("The query does not exist");

        let buffer = ""

        if(q === "select * from student")
            return this.studentList
        else if (q.includes("select * from student where id = ")){
            buffer = q.replace("select * from student where id = ","")
            
            return this.studentList.find(student => student.id === parseInt(buffer))
        }

    }

    insert(q){        
        if(q !== undefined && !Array.isArray(q))
            throw new Error("Data to insert was of wrong type");
        else if(q === undefined ||  Object.keys(q).length < 1)
            throw new Error("Data to insert on the mockDB should not be empty");
        
        let buffer = []
        let index = this.studentList.length > 0 ? this.studentList[this.studentList.length - 1].id + 1 : 1

        q.forEach(student => {
            if(
                student.firstName === undefined &
                student.secondName === undefined &
                student.streetNumber === undefined &
                student.StreetName === undefined &
                student.gpa === undefined 
            )
                throw new Error("The data to insert is not good, all fields are mandatory");
            
            buffer.push({
                "id": index,
                "firstName": student.firstName,
                "secondName": student.secondName,
                "streetNumber":  student.streetNumber,
                "streetName": student.streetName,
                "phoneNumber": student.phoneNumber,
                "gpa": student.gpa
            })
            index++
        });

        this.studentList.push(...buffer)
    }
}
