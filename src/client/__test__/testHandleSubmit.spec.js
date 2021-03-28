import {handleSubmit} from "../js/formHandler"
import 'babel-polyfill'

describe('test_client', () => {
    test('Test if the handlesubmit is defined or not',()=> {
    expect(handleSubmit).toBeDefined()
}),
test('it has to  be a function',() =>{
    expect(typeof handleSubmit).toBe("function");
})
    

})
