import{checkURL} from "../js/checkURL";
describe('Test check url functionality', () => {
    test('checking the url function to be defined ', () => {
        expect(checkURL).toBeDefined()
    
    })

    test('checking url function if true', () => {
        expect(checkURL("https://www.google.com/")).toBeTruthy()
      
    })

    test('check if url function is true or false', () => {
        expect(checkURL("google")).toBeFalsy()
      
    })
})