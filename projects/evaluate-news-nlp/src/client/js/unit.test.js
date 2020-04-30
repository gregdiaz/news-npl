import { checkForName } from './nameChecker'
import { handleSubmit } from './formHandler'

test(' handle Submit',()=>{
    handleSubmit
});

test('Check For Name',()=>{
    checkForName('Kirk1')
});