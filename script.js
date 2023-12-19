function calculateAge(){
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if(birthdate){
    const today = new Date();
    const birthDate = new Date(birthdate);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

      if(ageDays < 0){
         ageMonth--;
         ageDays += new Date(
          today.getFullYear(),
          today.getMonth(),
          0
         ).getDate();
      }

      if(ageMonth < 0){
        ageYears--;
        ageMonth += 12;
      }

      result.innerText = `Your age is ${ageYears} years, ${ageMonth} months, and ${ageDays} days.`;
      result.style.color = "green";

  }else {
    result.innerText = "Please Enter your Birthdate...";
    result.style.color = "red";
  }
}