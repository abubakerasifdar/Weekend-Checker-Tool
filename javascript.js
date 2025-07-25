
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("output").value = "";
            }
        })
        function myFunction() {
            let a = document.getElementById("input").value;
            let date = new Date(a)
            console.log();
            let dateonly = date.getDate();
            let monthonly = date.getMonth();
            console.log(dateonly);
            console.log(monthonly);
            let atikabirthdaydate = 1 
            let atikabrithdaymonth = 9
            let hd = 25;
            let hm = 2;
            let ad = 14;
            let am =  0;
            let md = 7;
            let mm = 8;
            let pd =  5;
            let pm = 0;
            let mod = 12;
            let mom = 5;

            let result;
            if(dateonly == atikabirthdaydate && atikabrithdaymonth == monthonly){
                result = " Happy Birthday Atika Asif Dar For Your Birthday. Date is 1/10/2010"
            }
            else if(hd == dateonly && hm == monthonly){
                result = "Happy Birthday Humna Asif Dar For Your Birthday. Date is 25/03/2009";
            }
            else {
                result = "Please Entered Your Family Birthday Date."
            }
            document.getElementById("output").style.display = "flex"
            document.getElementById("output").innerHTML = result;
        }
 