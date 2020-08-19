
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.property);
    console.log('if prev line throws exception you\'ll never see this')
}

//beforeTryCatch();

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.property);
        console.log('if prev line throws exception you\'ll never see this');
    } catch (error) {
        console.log('I caught an excep: ' + error.message);
    } finally {
        console.log('this will happen no matter what.');
    }
    console.log('still running');
}

afterTryCatch();


function PerfCalc(obj) {
if (!obj.hasOwnProperty('b')) {
    throw new Error('Obj missing prop');
    }
    return 6;
}

function perfHigh() {
    let obj = {}
    let value = 0;
    try {
        value = PerfCalc(obj);
    } catch (error) {
    
        console.log(error.message);
    }
    if (value == 0) {   

}
}

perfHigh()