// Function to to get Calculate age 

function CalculateAge(){
  // geting date from input 
  const date = document.getElementById("dateofBirth").value;

  // convert input data into separate date, month and year
  const dateofBirth = new Date(date);
  const day = dateofBirth.getDay();
  const month = dateofBirth.getMonth();
  const year = dateofBirth.getFullYear();

  // getting current date from input 

  const Currdate = document.getElementById("currentDate").value;
  const currentDate = new Date(Currdate);
  const currDay = currentDate.getDay();
  const currMonth = currentDate.getMonth();
  const currYear = currentDate.getFullYear();

  // now  Calculate the Age 

  let DiffDay = currDay-day;
  let DiffMonth = currMonth-month;
  let DiffYear = currYear-year;

  console.log(`Your Current Age is ${DiffYear} year ${DiffMonth} Month ${DiffDay}`);

  // show calulated age as output

  // Erorr Handling

  if (DiffYear < 0) console.log("invalid date");
  else if (DiffMonth > 0) {
      console.log(DiffYear);
  } else if (DiffMonth === 0 && DiffDay >= 0) {
      console.log(DiffYear);
  } else {
    DiffYear = DiffYear - 1;
      if (DiffMonth <= 0)
          if (DiffDay > 0) DiffMonth= 12 + DiffMonth;
          else DiffMonth = 11 - DiffMonth;
  }
  if (DiffDay < 0) {
    DiffDay = 30 + DiffDay;
      DiffMonth -= 1;
  }
  // show calulated age as output

  if(DiffYear<0){
    document.getElementById("currentAge").innerHTML = "invalid id"
  }

  else{
    let currentAgeElement = document.getElementById("currentAge");
    currentAgeElement.classList.remove("hidden");
    currentAgeElement.innerHTML = `Your current age is ${DiffYear} years, ${DiffMonth} months, and ${DiffDay} days.`;

  }

  
}


// geting btn to calculate the age

const CalcBtn = document.getElementById("btn")
console.log(CalcBtn);
CalcBtn.addEventListener("click", CalculateAge)