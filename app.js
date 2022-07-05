// to hold userInputs
let yearlySalary=0;
let hourlyWage=0;
let ySalFromHourlyWage = 0;
let totalTax = 0;
let totalYearlyTax = 0;
let totalHourlyTax = 0;
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
       else if( ySal > 98041 && ySal <=151978) {
           return ( (ySal -98040)*.26 + 17402);
       }
       else if( ySal > 151979 && ySal <=216511) {
           return  ( (ySal -151979)*.29 +31425 ) ;
       }
       else {
           return ((ySal-216511)*.33 + 50140 );
       }
}
     //ySal -> Yearly salary : fTax -> Federal Tax : userSelectProvince -> User selected province
    function calProvincialTax(ySal,Province) {

        // procincial tax for Ontario
        if(Province === 'Ontario') {
            if(ySal < 46226) {
                return  ySal*0.0505;
            }
            else if( ySal >=46226 && ySal < 92454) { 
                return (ySal-46228)*.0915 + 2234.413;
            }
            else if(ySal>=92454 && ySal <150000) { 
                return (ySal-57546)*0.116 + 6464.275;
            }
            else if(ySal>=150000 && ySal <220000) { 
                return (ySal-70000)*0.1216 +12866.13;
            }
            else {
                return (ySal-220000)*0.13 + 21378;
            }
        }
        // provincial tax for Newfoundland
        if(Province === 'NewFoundland') {
            if(ySal < 38081) {
                return ySal*0.087;
            }
            else if( ySal >=38081 && ySal <= 76162) {
                return (ySal-38081)*0.145 + 3313.047;
            }
            else if( ySal >76162 && ySal <=135974) {
                return (ySal-76162)*0.158 + 8834.792;
            }
            else if( ySal > 135974 && ySal <= 190364) {
                return (ySal-135974)*0.173 + 18284.296;
            }
            else {
                return (ySal-190363)*0.183 + 27693.766;
            }
        }
        // provincial taxes for prince edward island
        if(Province === 'PrinceEdwardIsland') {
            if(ySal < 31984) {
                return ySal*0.098;
            }
            else if( ySal >= 31984 && ySal <= 63969) {
                return (ySal-31984)*0.138 + 3134.432;
            }
            else {
                return (ySal-63969)*0.167+7548.362;
            }
        }
        // provincial taxes  for nova scotia 
        if(Province === 'NovaScotia') {
            if(ySal < 29590) {
                return ySal*0.08479;
            }
            else if( ySal >= 29590 && ySal <=59180) {
                return (ySal-29590)*0.1495 + 2600.961;
            }
            else if( ySal > 59180 && ySal <=92460) {
                return (ySal-59180)*0.1667 + 7624.66;
            }
            else if( ySal > 92460 && ySal <=149460) {
                return (ySal-92460)*0.175 + 12661.794;
            }
            else {
                return (ySal-149460)*0.21+22636;
            }
        }
    }
// button events
let submitYearly = document.querySelector('#submitYearly');
let submitHourly = document.querySelector('#submitHourly');

// objects to show the wages
let salaryInHours = document.querySelector('#salaryPerHour');
let salaryInYears = document.querySelector('#salaryPerYear');

// entering userprovince and localStorage
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
    ySalFromHourlyWage = `${Math.round(hourlyWage*2080)}`;
    salaryInYears.innerText = ySalFromHourlyWage;
    let fedTax = calFederalTax(ySalFromHourlyWage);
    let provTax = calProvincialTax(ySalFromHourlyWage,userProvince);
    console.log(`Federal tax = ${fedTax} and provincial tax is ${provTax}`)
   // console.log(ySalFromHourlyWage);
});

