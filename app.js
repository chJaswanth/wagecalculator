// to hold userInputs
let yearlySalary;
let hourlyWage;
let federalTax=0;
let provincialTax = 0;
let userProvince;
let userProvinceInput = document.querySelector('#userProvince');

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
    if(Province =='Ontario') {
        if(ySal < 46226) {
            provincialTax += ySal*0.0505;
            return provincialTax;
        }
        if( ySal >= 46226 && ySal <= 92454 ) {
            provincialTax += 2334.413;
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
    userProvinceInput.addEventListener('change', () => {
    userProvince = this.value;
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



