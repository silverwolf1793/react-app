import MockDB from './mockDB';


let goodDataCreated = [
    {
        "id": 1, //not necesary, only good for the tests
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    },
    {
        "id": 2, //not necesary, only good for the tests
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    },{
        "id": 3,
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    },{
        "id": 4,
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    }]

let goodDataInput =[
    {
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    },
    {
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
    },{
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": 2,
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa":"123123123"
}]

test('should be able to add data',() =>{
    let db = new MockDB()

    expect(typeof db.insert).toBe("function")

    expect(db.insert).toThrow(Error("Data to insert on the mockDB should not be empty"))

    expect(() => db.insert( [] ) ).toThrow(Error("Data to insert on the mockDB should not be empty"))

    expect(() => db.insert({"firstName":"Eric"})).toThrow(Error("Data to insert was of wrong type"))

    expect(() => db.insert({})).toThrow(Error("Data to insert was of wrong type"))

    expect(() => db.insert(
        [
            ...goodDataCreated,
            {
                "1": "asdasd",
                "2": "asdasd",
                "3": "asdasd",
                "4": "asdasd",
                "5": "asdasd",
                "6": "asdasd",
                "7": "asdasd"
            }

        ]
    )).toThrow(Error("The data to insert is not good, all fields are mandatory"))

    expect(Array.isArray(db.studentList)).toBe(true)

    expect(db.studentList.length).toBe(1)

    expect(() => db.insert(
        goodDataInput
    )).not.toThrow(Error)

    
    expect(db.studentList.length).toBe(4)

    expect(db.studentList).toEqual(goodDataCreated)

    expect(() => db.insert(
        [
            {
                "firstName": "Raul",
                "secondName": "Lopez",
                "streetNumber":  2,
                "streetName": "Manuel Centurión",
                "phoneNumber": "55 1963 0823",
                "gpa": 4
            }
        ]
    )).not.toThrow(Error)

    expect(db.studentList.length).toBe(5)

    expect(db.studentList).toEqual(
        [
            ...goodDataCreated,
            {
                "id": 5,
                "firstName": "Raul",
                "secondName": "Lopez",
                "streetNumber":  2,
                "streetName": "Manuel Centurión",
                "phoneNumber": "55 1963 0823",
                "gpa": 4
            }
        ]
    )
})
test('should be able to query and throw errors on wrong queries', () => {
  let db = new MockDB()


  expect(typeof db.query).toBe("function");

  expect(db.query).toThrow(Error)
  expect(() => db.query("")).toThrow(Error("The query on the mockDB was empty"))
  expect(() => db.query("asdasd")).toThrow(Error("The query does not exist"))
  expect(() => db.query("select * from student where id = 2")).not.toThrow(Error)

  expect(() => db.insert(goodDataInput)).not.toThrow(Error)

  expect(db.query("select * from student")).toEqual(goodDataCreated)
  expect(db.query("select * from student where id = 1")).toEqual(goodDataCreated[0])
        
});

