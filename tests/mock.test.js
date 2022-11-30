


function forEach(items , callback){

    for (let i = 0 ; i < items.length ; i++ ){
        callback(items[i])
    }

    //callback[0]
    //callback[1]
}

/*
* In Order to test the Above function , we need to mock the callback funtion
* to test it
*/


const mockCallback = jest.fn(x=> x+7)

forEach([0,1], mockCallback)


test("testing the mock function", ()=>{
  
    // mockCallback.mock.calls -> Mockcallback function is called with which arguments 
    // mockcallback.mock.calls -> [arg1 , arg2] -> [0,1]
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.results[0].value).toBe(7)
    expect(mockCallback.mock.results[1].value).toBe(8)

})

