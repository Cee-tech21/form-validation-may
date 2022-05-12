import statesData from './nigerian_states.js';

// Get elements from DOM



// Declare some variables
//statesData = JSON.parse(nigerianStates)
const theData = statesData[0]
const theStates = Object.keys(theData)

//console.log(statesData[0].Abia)



// Manipulate DOM
theStates.forEach(state => {
    $("#state-el").append(`<option>${state}</option>`)
})

//$("#state-el").on("change", getSelectedOpt)
$("#state-el").on("change", function(){
    let selState = this.selectedOptions[0].value
    populateLga(selState)
}  )



function getSelectedOpt(){
    console.log(this.selectedOptions[0].value)
}

function populateLga(selState){
    $("#lg-el").html(`<option selected>Choose LG</option>`)
    let lgArr = []
    lgArr = statesData[0][selState]
    lgArr.forEach(lg => {
        $("#lg-el").append(`<option>${lg}</option>`)
    })
    
}

submitButtonEl.click(function(){
    
    if (expOrIncomeEl.val() !==  "Select" && enteredAmountEl.val() >= 1){
        let expOrInc = expOrIncomeEl.val()
        //console.log(enteredAmountEl.val())

        // Do computations
        if( expOrInc === "Expense"){
            console.log(expOrInc)
            theTotal -= enteredAmountEl.val()
            currentBalEl.text( theTotal )
            

            transHist = `<p class="bg-light py-2 px-2">
                    ${expOrInc} - ${enteredAmountEl.val()} </p>`
            //viewTransHistory.append(cashHistory)
            transHistDiv.append(transHist)

        } else if (expOrInc === "Income"){
            theTotal += Number(enteredAmountEl.val())
            currentBalEl.text( theTotal )
            
            //viewTransHistory.append(cashHistory)
            transHist = `<p class="bg-light py-2 px-2">
                    ${expOrInc} + ${enteredAmountEl.val()} </p>`
            transHistDiv.append(transHist)

        }
    } 
    else{swal("Enter a positive amount. Select if \
                transaction is income or expense")}
})
