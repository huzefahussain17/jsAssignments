var chapter = window.prompt("Enter the chapter no:");

// chp#1
if(chapter==1){

    var task = window.prompt("Enter the task no:");

if (task==1){
    alert("HEllo!, How are you");
}

if (task==2){
    alert("Error! Please enter a valid password.");
}

if (task==3){
    alert("Welcome to JS Land...\nHappy coding!");
}

if (task==4){
    alert("Welcome to JS Land...");
    alert("Happy coding!");
}

if (task==5){
    alert("Hello... I can run JS through my web browser console");
}
}
// chp#2
if(chapter==2){
    var task = window.prompt("Enter the task no:");

if(task==1){
    var username;
}

if(task==2){
    var myName="Syed Muhammad Huzefa Hussain";
}

if(task==3){
    var message="Hello World";
    alert(message);
}

if(task==4){
    var name="John Doe";
    var age=15;
    var qualification="Certified Mobile Application development";
    alert(name);
    alert(age);
    alert(qualification);
}

if(task==5){
    alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
}

if(task==6){
    var email="example@example.com";
    alert(email);
}

if(task==7){
    var a="A smarter way to learn Java Script";
    alert(a);
}

if(task==8){
    document.write("Yah! I can write HTML content through JavaScript");
}

if(task==9){
    var b="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
    alert(b);
}

}
// chp#3
if(chapter==3){
    var task = window.prompt("Enter the task no:");

if(task==1){
    var age="I am 15 years old ";
    alert(age);
}

if(task==2){
    var a="You have visited this site 15 times ";
    alert(a);
}

if(task==3){
    var birthYear="My birth year is 1990";
    document.write(birthYear);
    
}

if(task==4){
   var name="John Doe", quantity="5 T-shirt(s)", shop="XYZ Clothing Store";
    document.write("",name + "\tordered" + "\t",quantity + "\ton" + "\t",shop);
}

}

// chp#4
if(chapter==4){
    var task = window.prompt("Enter the task no:");


}
// chp#5
if(chapter==5){
    var task = window.prompt("Enter the task no:");

    if (task==1){
        var a=3;
        var b=5;
        var c=a+b;
        document.write("Sum of " + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);
    }

    if (task==2){
        var a=3;
        var b=5;
        var c=a-b;
        var d=a*b;
        var e=a/b;
        document.write("Subtraction of " + " " + a + " " + "and" + " " + b + " " + "is" + " " + c , 
        '<br>',"Multiplication of " + " " + a + " " + "and" + " " + b + " " + "is" + " " + d , 
        '<br>',"Division of " + " " + a + " " + "and" + " " + b + " " + "is" + " " + e);
       
    }

    if (task==3){
        var a;
        document.write(a,'<br>');
        var a=5;
        document.write("Initial Value: " + " ",a, '<br>');
        a++;
        document.write("Value after increment is:" + " ", a, '<br>');
        var a=a+7;
        document.write("Value after addition is:" + " ", a, '<br>');
        a--;
        document.write("Value after decrement is:" + " ", a, '<br>');
        var a=a%3;
        document.write("The remainder is:" + " ", a, '<br>');

    }

    if (task==4){
        var oneTicket=600;
        b=oneTicket*5;
        document.write("Total cost to buy 5 tickets to movie is" + " ",b +"PKR" )
    }
    
    if (task==5){
    
    
      document.write("Table of 4 <br>")

    { 
        var a= 4    ;
        var b="";
        for (i=1; i<=10; i++) {
        b += a+ " x " +i+ " = " +(i*a)+ "<br/>";
    }
        document.write(b);
        }
       
    
    }

    if (task==6){
        var a=25;
        var b=(a*9/5)+32;
        var c =70;
        var d=(c-32)*5/9;
        document.write(a + "°C" + " " + "is" + " " + b + "°F", '<br>' );
        document.write(c + "°F" + " " + "is" + " " + d + "°C");
    }

    if (task==7){

        var a =650;
        var b=3;
        var c=100;
        var d=7;
        var e=100; 
        document.write('<h1>Shopping cart</h1> <br><br>');
        document.write("Price of item 1 is" + " " + a ,'<br>');
        document.write("Quantity of item 1 is" + " " + b ,'<br>');
        document.write("Price of item 2 is" + " " + c ,'<br>');
        document.write("Quantity of item 2 is" + " " + d ,'<br>');
        document.write("Shipping charges is" + " " + e ,'<br><br>');
        document.write("Total cost of your order is" + " " + (a*b+c*d+e));
    }

    if(task==8){
        var a=840;
        var b=980;
        var c=(a/b)*100;
        document.write("Total marks:" + " " + b ,'<br>');
        document.write("Marks obtained:" + " " + a,'<br>');
        document.write("Percentage:" + " " + c,'<br>');
    }

    if(task==9){
        
        var a=10;
        var b=25;
        var c=(a*104.80+b*28);
        document.write('<h1>Currency in PKR</h1> <br><br>');
        document.write("Total currency in PKR:" + " " + c);
    }

    if(task==10){

        var a=10;
        var b=(((a+5)*10)/2);
        document.write(a);

    }

    if(task==11){

        var a=2016;
        var b=1992;
        var c=a-b;
        document.write("<h1>Age Calculator</h1> <br><br>");
        document.write("Current year" + " " + a,'<br>');
        document.write("Birth Year" + " " + b,'<br>');
        document.write("Your age is" + " " + c);

        
    }

    if(task==12){
        var a=20;
        var b=2*3.142*a;
        var c=3.142*a^2;
        document.write("<h1>The Geometrizer</h1><br><br>");
        document.write("Radius of a circle" + " " + a,'<br>');
        document.write("The circumference is" + " " + b,'<br>');
        document.write("The area is" + " " + c,'<br>');
    }

    if(task==13){
        var a="chocolate chip"
        var b=15;
        var c=65;
        var d=3;
        var e=(c-b)*d;
        document.write("<h1>The Life Time Supply Calculator</h1><br><br>");
        document.write("Tour favourite snack is" + " " + a ,'<br>');
        document.write("Current age" + " " + b,'<br>');
        document.write("Estimated maximum age" + " " + c,'<br>');
        document.write("You will need" + " " + e + " " + a + " " + "to last you until the ripe old age of " + " " + c);
    }
    

}

    if(chapter==6){
        var task=window.prompt("Enter the task no")
        
        // Task 1
        if(task==1){

            var a=10;
            document.write("Result:<br>");
            document.write("The value of a is" + " " + a,'<br><br>');
            document.write("..............................<br><br>")
            document.write("");
            var a =a + 1;
            document.write("The value of ++a is:" + " " + a,'<br>');
        }

        
        // Task 3
        if(task==3){
            var a=window.prompt("Enter your name");
            alert("Hello" + " " + a + " " + "Good Morning");
        }

        // Task 5
        if (task==5){
            
            var a=window.prompt("Enter a no for multiplication table");
                
            var b="";
            for (i=1; i<=10; i++) {
            b += a+ " x " +i+ " = " +(i*a)+ "<br/>";
            }
            document.write(b);
            
        }

        // Task 6

        if (task==6){

            document.write("<tr><b><td>Subject </td><td>Total marks</td> <td>Obtained marks</td> <td>Percentage</td></b></tr><br>");
            document.write(" <td>English</td> <td>100</td> <td>54</td> <td>54%<td>");

        }
    }

    if(chapter==7){
        var task=window.prompt("Enter the no of task");
        if(task==1){

         var x ="Karachi"
          var a = window.prompt("Enter the city name");
          if(a==x){
              alert("Welcome to city of lights");
          }
            
        }

        if(task==2){

            var x="male";
            var y="female" ;
            var a=window.prompt("What is your Gender");
            if(a==x){
                alert("Good Morning Sir");
            } 
            else if (a==y){
                alert("Good Morning Ma'am");
            }
            
        }


        if(task==3){

            var x="red";
            var y="yellow";
            var z="green"
            var a=window.prompt("Enter color of road traffic signal");
            if(a==x){
                alert("Must Stop");
            } 
            else if (a==y){
                alert("Ready to move");
            }

            else if (a==z){
                alert("Move now");
            }
            
        }


        if (task==4){

           a= window.prompt("Enter remaining fuel in a car in litres.");
           if (a<=0.25){
               alert("Please refill the fuel in your car");
           }
        }

        if(task==5){
            // part a
            var a = 4;
            if (++a === 5){
            alert("given condition for variable a is true")
            }

            // part b

            var b = 82;
            if (b++ === 83){
            alert("given condition for variable b is true");
            }

            // part c

            var c = 12;
            if (c++ === 13){
                alert("condition 1 is true");
            }

            if (c === 13){
                alert("condition 2 is true");
                }
                if (++c < 14){
                alert("condition 3 is true");
                }
                if(c === 14){
                alert("condition 4 is true");
                }
                

            // part d

            var materialCost = 20000;
            var laborCost = 2000;
            var totalCost = materialCost + laborCost;
            if (totalCost === laborCost + materialCost){
            alert("The cost equals");
            }
            
            // part e

            if (true){
                alert("True");
                }
                if (false){
                alert("False");
                }

            
            // part f


            if("car" < "cat"){
                alert("car is smaller than cat");
                }
                
          }


    if (task==6){
        document.write("<h1>Mark Sheet</h1><br><br>")
      
        a=+window.prompt("Enter marks");
        b=+window.prompt("Enter marks");
        c=+window.prompt("Enter marks");
        d=+window.prompt("Enter total marks");
        var x=a+b+c;
        var e=((x/d)*100);
        if (e>=80){

            document.write("Total marks" + " " + d,'<br>');
            document.write("Marks obtained" + " " + x,'<br>');
            document.write("Percentage" + " " + e,'<br>');
            document.write("Grade" + " " + ":" + " " + "A-one",'<br>');
            document.write("Remarks" + " " + ":" + "Excellent",'<br>');

        }

        else if (e>=70){

            document.write("Total marks" + " " + d,'<br>');
            document.write("Marks obtained" + " " + x,'<br>');
            document.write("Percentage" + " " + e,'<br>');
            document.write("Grade" + " " + ":" + " " + "A",'<br>');
            document.write("Remarks" + " " + ":" + "Good",'<br>');

        }

        else if (e>=60){

            document.write("Total marks" + " " + d,'<br>');
            document.write("Marks obtained" + " " + x,'<br>');
            document.write("Percentage" + " " + e,'<br>');
            document.write("Grade" + " " + ":" + " " + "b",'<br>');
            document.write("Remarks" + " " + ":" + "You need to improve",'<br>');

        }

        else if (e<60){

            document.write("Total marks" + " " + d,'<br>');
            document.write("Marks obtained" + " " + x,'<br>');
            document.write("Percentage" + " " + e,'<br>');
            document.write("Grade" + " " + ":" + " " + "Fail",'<br>');
            document.write("Remarks" + " " + ":" + "Sorry",'<br>');

        }
    }

    if (task==7){

        var a=5;
        var b =window.prompt("Guess the no");
        if (b==a){
            alert("Bingo Correct Answer");
        }

        else if(b=a+1){
            alert("Close enough to the right answer");
        }

    }

    if (task==8){

        var a= window.prompt("Enter the no ");
        if (a%3==0){
            alert("No is divisible by 3");
        }
        else {
            alert("No is not divisible by 3");
        }
    }


    if (task==9){

        var a= window.prompt("Enter the no ");
            if (a%2==0){
                alert("No is even");
            }
            else if (a==0){
                alert("No is even");
            }
            else {
                alert("No is odd");
            }

        }



    if (task==10){

        var T=window.prompt("Enter the temperature");
        if (T>40){

            alert("It is too hot outside.");
        }

        else if (T>30){
            alert("The Weather today is normal");
        }

        else if (T>20){

            alert("Today's Weather is cool");
        }

        else if (T>10){
            alert("OMG Today's Weather is so Cool.");
        }
    }

    if (task==11){

     var val1=+prompt("Enter your first value");
     var sign=prompt("Enter your operator");
     var val2=+prompt("Enter your second value");
    
    
    if(sign==="+"){
        var x=val1+val2;
        alert("val1 + val2 = " + x);
    }
    else if(sign==="-"){
        var x=val1-val2;
        alert("val1 - val2 = " + x);
    }
    else if(sign==="*"){
        var x=val1*val2;
        alert("val1 * val2 = " + x);
    }
    else if (sign==="/"){
        var x=val1/val2;
        alert("val1 / val2 = " + x);
    }
    }
}
if(chapter==8){
    var task=window.prompt("Enter the no of task");
    if(task==1){

   
      
        
    }

    if(task==2){

        var a=+window.prompt("Enter first no");
        var b=+window.prompt("Enter second no");
        if(a>b){
            alert(a + " is greater");
        }

        else if(b>a){
                alert(b + " is greater");
            }

        else if(a==b){
            alert("Numbers are equal");
        }

        }


    if (task==3){

        var a=window.prompt("ennter the no");
        if(a>0){
            alert("No is positive");
        }
        else if(a<0){
            alert("No is negative");
        }
        else if (a==0){
            alert("No is equal to zero")
        }
    }

    if (task==4){

        var x=window.prompt("Enter a Character");
      
        if(x==="a" || x==="e" || x==="i" || x==="o" || x==="u"){
            alert("Character is vowel");
        }
        else{
            alert("Character is consonent");
        }
    }

    if (task==5){

        var a="pakistan";
        x=window.prompt("Enter a passsword","password");
        if (x===""){
            alert("Please enter the password");
        }
        else if (x===a){
            alert("Correct! The password you enterd matches the original password");
        }
        else {
            alert("Incorrect Password");
        }
    }

    if (task==6){

        // var greeting;
        var hour = 13;
        if (hour < 18) {
            alert = ("Good day");
        }
        else{
            alert= ("Good evening");
            }
    }

    if (task==7){

        var a=window.prompt("Enter time in 24 hours clock format")

        if (a==1300){
            alert(a + " " + "=" + " " + "1pm");
        }

        else if (a==1400){
            alert(a + " " + "=" + " " + "2pm");
        }

        else if (a==1500){
            alert(a + " " + "=" + " " + "3pm");
        }

        else if (a==1600){
            alert(a + " " + "=" + " " + "4pm");
        }

        else if (a==1700){
            alert(a + " " + "=" + " " + "5pm");
        }

        else if (a==1800){
            alert(a + " " + "=" + " " + "6pm");

        }

        else if (a==1900){
            alert(a + " " + "=" + " " + "7pm");
        }

        else if (a==2000){
            alert(a + " " + "=" + " " + "8pm");
        }

        else if (a==2100){
            alert(a + " " + "=" + " " + "9pm");
        }

        else if (a==2200){
            alert(a + " " + "=" + " " + "10pm");
        }

        else if (a==2300){
            alert(a + " " + "=" + " " + "11pm");
        }

        else if (a==2400){
            alert(a + " " + "=" + " " + "12am");
        }

        else if (a==100){
            alert(a + " " + "=" + " " + "1am");
        }

        else if (a==200){
            alert(a + " " + "=" + " " + "2am");
        }

        else if (a==300){
            alert(a + " " + "=" + " " + "3am");
        }

        else if (a==400){
            alert(a + " " + "=" + " " + "4am");
        }
        else if (a==500){
            alert(a + " " + "=" + " " + "5am");
        }

        else if (a==600){
            alert(a + " " + "=" + " " + "6am");
        }

        else if (a==700){
            alert(a + " " + "=" + " " + "7am");
        }

        else if (a==800){
            alert(a + " " + "=" + " " + "8am");
        }

        else if (a==900){
            alert(a + " " + "=" + " " + "9am");
        }

        else if (a==1000){
            alert(a + " " + "=" + " " + "10am");
        }

        else if (a==1100){
            alert(a + " " + "=" + " " + "11am");
        }

        else if (a==1200){
            alert(a + " " + "=" + " " + "12pm");
        }
    }

}  


if (chapter==9){
    var task=window.prompt("Enter the no of task");
    if(task==1){
      var names=[];
    }

    if(task==2){
        var names=[];
      }

    if(task==3){
        var names=["Huzefa","Salman","Ammar","Umair"];
        alert(names);
    }

    if(task==4){
        var numbers=[24,34,56,78];
        alert(numbers[2]);
    }

    if(task==5){
        var booleanValues=[true,false];
        alert(booleanValues);
    }

    if(task==6){
        var mixedArray = [1, "Bob", "Now is", true];
        alert(mixedArray);
    }

    if (task==7){

        var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
        document.write("<h1>Qualification </h1><br><br>" + qualification[0] ,'<br>' + 
        qualification[1],'<br>' + qualification[2],'<br>' + 
        qualification[3],'<br>' + qualification[4],'<br>' +
         qualification[5],'<br>' + qualification[6],'<br>' + qualification[7])
    }

    if (task==8){
        var names =["Michael","John","Tony"];
        var score=[320,230,480];
        var x= (score[0]/500)*100;
        var y= (score[1]/500)*100;
        var z= (score[2]/500)*100;

        document.write("Score of" + " " + names[0] + " " + "is" + " " + score[0] + "." + " " +
         "Percentage:" + " " + x+"%" ,'<br>');
        document.write("Score of" + " " + names[1] + " " + "is" + " " + score[1] + "." + " " +
         "Percentage:" + " " + y+"%" ,'<br>');
        document.write("Score of" + " " + names[2] + " " + "is" + " " + score[2] + "." + " " + 
        "Percentage:" + " " + z+"%" ,'<br>');
    }

    if (task==9){
        
       var color=["red","blue","orange"];
       document.write(color,'<br>');

    //    part a
       var a="";
       a=window.prompt("Enter a color you want to add at the start of the array");
       color.unshift(a);
       document.write(color,'<br>'); 
    //   part b
        var a="";
        a=window.prompt("Enter a color at the end of the array");
        color.push(a);
        document.write(color,'<br>');

        // part c

        color.unshift("yellow","brown");
        document.write(color,'<br>');
        // part d

        color.shift();
        document.write(color,'<br>');

        // part e

        color.pop();
        document.write(color,'<br>');

        // part f
        var b=""
        var c="";
        var d="";
        b=window.prompt("At which position you want to add the color");
        d=window.prompt("Do you want to delete any color?")
        c=window.prompt("what color you want to add")
        color.splice(b,d,c);
        document.write(color,'<br>');

        // part g

        var b=""
        var c="";
        
        b=window.prompt("At which position you want to delete the color");
        c=window.prompt("how many colors you want to delete")
       
        color.splice(b,c);
        document.write(color,'<br>');
    }


    
    if (task==10){
        var scores=[320,230,480,120];
        scores.sort();
        alert(scores);
        
    }

    if (task==11){
        
        var cityList=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
        document.write("<h1>Cities List:</h1><br>" + cityList,'<br><br>');

        var a =cityList.slice(2,4);
        document.write("<h1>Selected city list:</h1> <br>" + a);

    }

    if (task==12){

        var arr = ["This","is","my","Cat"];
       var a="";
        document.write("<h1>Array:</h1><br>"+ arr + '<br><br>')
         a=arr.toString();
        document.write("<h1>String:</h1><br>" + a);

    }

}


if (chapter==10){
    var task=window.prompt("Enter the no of task");
    if(task==1){
      alert("hello")
    }
}