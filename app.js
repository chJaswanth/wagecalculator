// to hold userInputs
let yearlySalary;
let hourlyWage;
let federalTax=0;
let provincialTax = 0;
let userProvince = 'Ontario';
let userProvinceInput = document.querySelector('#userProvince');


//local storage for saving the province
if( localStorage.getItem('UserProvince')!= null ) {
    userProvince = localStorage.getItem('UserProvince');
    let selectVar = document.querySelector('select');
    for(let i=0; i<selectVar.length; i++) {
        if( (selectVar[i].value) === userProvince ) {
            selectVar[i].setAttribute('selected','selected');
        };
    }
}
// calculation for federal taxes
function calFederalTax(ySal) {
       if(ySal < 49020) {
           return 49020*.15;
       }
       else if( ySal >=49020 && ySal <= 98040) {
           return ( (ySal - 49020)*.205 +7353);
       }
       else if( ySal >=98041 && ySal <=151978) {
           return ( (ySal -98040)*.26 + 17402);
       }
       else if( ySal >=151979 && ySal <=216511) {
           return  ( (ySal -151979)*.29 +31425 ) ;
       }
       else {
           return ((ySal-216511)*.33 + 50140 );
       }
}
function calProvincialTax(ySal,Province) {
    //ySal -> Yearly salary : fTax -> Federal Tax : userSelectProvince -> User selected province
    
    // Federal tax for Ontario
    if(Province === 'Ontario') {
        if(ySal < 46226) {
            provincialTax = ySal*0.0505;
            return provincialTax;
        }
        else {
            provincialTax = 2334.413;
            return provincialTax;
        }
    }
}

// button events
let submitYearly = document.querySelector('#submitYearly');
let submitHourly = document.querySelector('#submitHourly');

// objects to show the wages
let salaryInHours = document.querySelector('#salaryPerHour');
let salaryInYears = document.querySelector('#salaryPerYear');

// entering userprovince 
    userProvinceInput.addEventListener('change', (e) => {
    userProvince = userProvinceInput.value;
    localStorage.setItem('UserProvince', userProvince);
});

perYear.addEventListener('change', () => {
    yearlySalary = document.querySelector('#perYear').value;
    salaryInHours.innerText = Math.round(yearlySalary/2080);
    //calling function to calculate federal tax
    let fedTax = calFederalTax(yearlySalary);
    //calling function to calculate provincial tax
    let provTax = calProvincialTax(yearlySalary,userProvince);
    console.log(`${yearlySalary} ${fedTax} ${userProvince}`);
    console.log(`Federal tax = ${fedTax} and provincial tax is ${provTax}`);
    
});

perHour.addEventListener('change', () => {
    hourlyWage = document.querySelector('#perHour').value;
    salaryPerYear.innerText = `$${Math.round(hourlyWage*2080)}`;
});



