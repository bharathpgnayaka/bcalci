class Calculator{
    constructor(pretext,currenttext){
        this.pretext = pretext
        this.currenttext = currenttext
        this.clear();
    }
    clear(){
        this.current-operand = ''
        this.pre-operand = ''
        this.operation = undefined
        
    }
    delete(){

    }
    opppendnumber(number){
   this.current-operand = this4.current-operand.tostring() + number.tostring()
    }
    chooseoperation(operation){

    }
    compute(){

    }
    updatedisplay(){
  this.currenttext.innerText = this.current-operand
    }
}




const numberbutton = document.querySelectorAll('[data-number]')
const clearbutton = document.querySelectorAll('[data-clear]')
const deletebutton = document.querySelectorAll('[data-delete]')
const operationbutton = document.querySelectorAll('[data-operation]')
const equalbutton = document.querySelectorAll('[data-equals]')
const pretext = document.querySelectorAll('[data-pre-operand]')
const currenttext = document.querySelectorAll('[data-current-operand]')


const Calculator = new Calculator(pretext,currenttext)

numberbutton.forEach(button => {
    button.addEventListener('click' () => {
        Calculator.appendnumber(button.innerText)
        Calculator.updatedisplay()
    })
})