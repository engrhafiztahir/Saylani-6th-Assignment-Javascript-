  //Chapter 21-25

//...........................................******.........................................
//Question 1
var A= window.prompt("Please enter First name");
var B= window.prompt("Please enter Last name");
var fullName = A + B;
document.write("Welcome " + fullName);


//Question 2
var A= window.prompt("Please enter your favourite Mobile Phone");
var B=A.length;
document.write("My favourite phone is: " +A +"<br>");
document.write("Length of string: " +B)

//Question 3
var A = "Pakistani"
var B= A.length;
var i;
var string;
document.write("String: " +A +"<br>");
for(i =0; i<B; i++)
{

if(A.charAt(i)=="n")
{

break;
}


}
document.write("Index of 'n':" +i )



//Question 4
var A="Hello World" ;
var B = A.length;
var i;
document.write("String: " +A +"<br>");
for(i=0; i<B; i++)
{

if (A.charAt(9)=="l")
{
}

}

document.write("Last index of 'l': "+i );


//Question 5
var A = "Pakistani"
var B= A.length;
var i;
var C=A.charAt(3);
document.write("String: " +A +"<br>");
for(i =0; i<B; i++)
{

//if(A.charAt(i))
//{

//break;
//}


}
document.write("Character at index 3: " +C )


//Question 6
var A = "Pakis"
var D="tani"
var E=A+D;
var B= E.length;
var i;
var C=E.charAt(3);
document.write("String: " +E +"<br>");
for(i =0; i<B; i++)
{

//if(A.charAt(i))
//{

//break;
//}


}
document.write("Character at index 3: " +C )


//Question 7
var A="Hyderabad"
document.write("City: " +A +"<br>");
var B=A.replace("Hyder", "Islam" );
document.write("After replacement: " +B);


//Question 8
var message = "Ali and Sami are best friends. They play cricket and football together. ";
document.write(message +"<br>");
var Replace=message.replace(/and/g, "&");
document.write("After Replacement " +"<br>" +Replace)


//Question 9
var number ="472";
document.write("Value: " +number +"<br>");
var num=Number(number);
document.write("Value: " +num)


//Question 10
var A=window.prompt("Please enter input value")
var B=A.toUpperCase();
document.write("User Input: " +A +"<br>");
document.write("Upper case: " +B);

//Question 11
var A=window.prompt("Please enter input value")
var C=A.length;
var B=A.charAt(0).toUpperCase();

document.write("User Input: " +A +"<br>");
document.write("Title case: " +B);


//Question 12
var num=35.36;
var string;
string=num.toString();
string=string.replace("." , "")
document.write("Number: " +num +"<br>")
document.write("Result: " +string)


//Question 13
var username=window.prompt("Please enter the username");
var Length=username.length;
var i;
for(i=0; i<Length;i++)
{

if(username.charAt(i) === "@" || username.charAt(i) === "," || username.charAt(i) === "." || username.charAt(i) === "!")
{
    
alert("Please enter a valid username ")

}


}
document.write("Username is: " +"<br>" +username )


//Question 14
var A = ["cake","apple pie", "cookie", "chips", "patties"];
var search=window.prompt("Welcome to ABC Bakery. What you want to order");
var Length=A.length
var i;
for(i=0; i<Length; i++)
{

if(search==A[i])
{

document.write(search +" is available at index " + i +" in our bakery ");
 
}

else
{

    
document.write("Not available")


}

}

//Question 15
var A=window.prompt("Enter Password");
if(A.charAt(0)==0 || A.charAt(0)==1 || A.charAt(0)==2 || A.charAt(0)==3 || A.charAt(0)==4 || A.charAt(0)== 5|| A.charAt(0)==6 || A.charAt(0)==
7 ||A.charAt(0)==8 ||A.charAt(0)==9)

{

document.write("Password can not begin with a number" +"<br>" +"Please enter a valid password");


}
else
{

document.write("Password: " +"<br>" +A)

}


//Question 16
var A="University of Karachi";
var B=A.length;
var i;
var C=A.split('')
for (i =0 ;i< B; i++)
{

document.write(C +"<br>");
break;

}


//Question 17
var A=window.prompt("Please enter data");
B=A.length;
C=B-1;
D=A.charAt(C);
document.write("User input: " +A +"<br>");
document.write("Last character of input: " +D);


//Question 18
var A="The quick brown fox jumps over the lazy dog";
var count=0;
var B=A.length;
var i;
document.write("Text: The quick brown fox jumps over the lazy dog" +"<br>")
for(i=0; i<B;i++)
{
if(A.charAt(i)=="t" || A.charAt(i)=="T")
{

count=count+1

}



}

document.write("There are " + count +" occurrence(s) of the word 'the'")

//End
//...........................................******.........................................

//Chapter 26-30

//...........................................******.........................................
//Question 1
var number=window.prompt("Please enter a positive interger");
var Length=number.length;
var string;
string=number.toString();
string=string.replace(".", "")
var Round;
var Ceil;
var Floor;
Round=Math.round(number);
Ceil=Math.ceil(number);
Floor=Math.floor(number);
document.write("number:" +number +"<br>");
document.write("round of value:" +Round +'<br>');
document.write("floor vlaue:" +Floor +"<br>" );
document.write("ceil value:" +Ceil);


//Question 2
var number=window.prompt("Please enter a negative interger");
var Length=number.length;
//var string;
//string=number.toString();
//string=string.replace(".", "")
var Round;
var Ceil;
var Floor;
Round=Math.round(number);
Ceil=Math.ceil(number);
Floor=Math.floor(number);
document.write("number:" +number +"<br>");
document.write("round of value:" +Round +'<br>');
document.write("floor vlaue:" +Floor +"<br>" );
document.write("ceil value:" +Ceil);


//Question 3
var A=window.prompt("Please enter a number");
var B;
B=Math.abs(A);
document.write("The absolute value of " +A +" is " +B);

//Question 4
var bigDecimal=window.prompt("Random Number")
var bigDecimal = Math. random() ;
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math. floor(improvedNum) ;
document.write("random dice value:" +numberOfStars);

//Question 5
var bigDecimal=window.prompt("Random Number")
var bigDecimal = Math. random() ;
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math. floor(improvedNum) ;
if(numberOfStars==2)
{

document.write(numberOfStars +"<br>");
document.write("random coin value: Heads");

}

else
{

    if( numberOfStars==1)
    {

document.write(numberOfStars +"<br>")
document.write("random coin value: Tails")

    }
}


//Question 6
var bigDecimal=window.prompt("Random Number")
var bigDecimal = Math. random() ;
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math. floor(improvedNum) ;
document.write("random number between 1 and 100: " +numberOfStars);

//Question 7
var weight=window.prompt("Please enter your weight in kilograms");
document.write("The weight of user is "+weight );


//Question 8
var bigDecimal=window.prompt("Random Number")
var bigDecimal = Math. random() ;
var improvedNum = (bigDecimal * 10) + 1;
var numberOfStars = Math. floor(improvedNum) ;
document.write("random dice value:" +numberOfStars);
var userinput=window.prompt("Please enter your number from 1 to 10");
if(userinput==numberOfStars)
{

document.write("Congratulations your number is correct!" +"<br>")


}
else
{

document.write("Please try again!")


}

//End
//...........................................******.........................................

//Chapter 31-34

//...........................................******.........................................
//Question 1
var date= new Date();
document.write(date);


//Question 2
var date= new Date();
var month=date.getMonth();
//document.write("Current month:" +month)
if(date.getMonth()==5)
{

month="June"
document.write("Current month:" +month);

}


//Question 3
var Newday=new Date();
//document.write(Newday)
var currentDay=Newday.getDay();
//document.write("Today is " +currentDay);
if(Newday.getDay()==5)
{
currentDay="Friday"
document.write("Today is " +currentDay);

}

//Question 4
var Newday=new Date();
//document.write(Newday)
var currentDay=Newday.getDay();
//document.write("Today is " +currentDay);

if(Newday.getDay()==0)
{
currentDay="Sunday"
document.write("It’s Fun day");

}

if(Newday.getDay()==1)
{
currentDay="Monday"
document.write("Today is "+currentDay);

}

if(Newday.getDay()==2)
{
currentDay="Tuesday"
document.write("Today is "+currentDay);

}

if(Newday.getDay()==3)
{
currentDay="Wednesday"
document.write("Today is "+currentDay);

}

if(Newday.getDay()==4)
{
currentDay="Thursday"
document.write("Today is "+currentDay);

}

if(Newday.getDay()==5)
{
currentDay="Friday"
document.write("Today is " +currentDay);

}


if(Newday.getDay()==6)
{
currentDay="Saturday"
document.write("It’s Fun day");

}


//Question 5
var days= new Date();
var currentDate=days.getDate();
document.write(currentDate +"<br>");
if(currentDate<16)
{

document.write("First fifteen days of the month ");


}
else
{

document.write("Last days of the month");

}

//Question 6
var date= new Date("December 05, 2015, 22:32:23");
document.write("Current Date: " +date +"<br>");
var msdate=date.getTime();
var secondDate= new Date("January 01, 1970");
var mssecondDate=secondDate.getTime();
var msDiff=date-secondDate;
document.write(msDiff);


//Question 7
var date= new Date();
var hours=date.getHours();
//document.write(hours);
if(hours==12)
{

document.write("Noon");

}

if(hours<12)
{

document.write("Its AM");

}

if(hours>12)
{

document.write("Its PM");

}


//Question 8
var laterDate=new Date("May 31, 2020, 00:00:00");
document.write("Later date: " +laterDate);


//Question 9
var date= new Date("June 18, 2015");
var day=date.getTime();
var newdate=new Date();
var newday=newdate.getTime();
var Diff=newdate-day;
var dDiff=Diff/(1000*60*60*24);
dDiff=Math.floor(dDiff);
document.write(dDiff +" days have passed since 1st Ramadan, 2015");


//Question 10
var date= new Date();
document.write("On reference date " +date +"<br>");
var day=date.getTime();
var newdate=new Date("January 01 , 2020");
var newday=newdate.getTime();
var Diff=day-newday;
var dDiff=Diff/1000;
dDiff=Math.floor(dDiff);
document.write(dDiff +" seconds had passed since beginning of 2020");


//Question 11
var date= new Date();
document.write("Current date " +date +"<br>");
var day=date.getTime();
var newdate=new Date("June 19, 2020, 19:00:00");
var newday=newdate.getTime();
var Diff=day-newday;
var dDiff=Diff/(1000*60*60);
dDiff=Math.floor(dDiff);
document.write(dDiff +" hours ago it was " +newdate);


//Question 12
var date= new Date();
document.write("Current date " +date +"<br>");
var day=date.getFullYear();
var newdate=new Date("June 19, 1920, 19:00:00");
var newday=newdate.getFullYear();
var Diff=day-newday;
//var dDiff=Diff/(1000*60*60*24*12);
Diff=Math.floor(Diff);
document.write(Diff +" years back it was  " +newdate);


//Question 13
var age= window.prompt("Please enter your age");
var date= new Date();
var year=date.getFullYear();
var birth=year-age;
document.write("Your age is " +age +"<br>");
document.write("Your birth year is " +birth );


//Question 14
var customer=window.prompt("Please enter the custoemr name " );
var month=window.prompt("Please enter the month" );
var charges=16;
var latecharges=350;
var units=window.prompt("Please enter the number of units" );
document.write("Customer Nmae: " +customer +"<br>");
document.write("Month: " +month +"<br>");
document.write("Number of units: " +units +"<br>");
document.write("Charges per unit: " +charges +"<br>");
document.write("Net amount Payable (within Due Date): " +units * +charges +"<br>");
document.write("Late payment surcharge: " +latecharges +"<br>");
document.write("Gross Amount Payable (after Due Date): " +((+units * +charges) + +latecharges) +"<br>");


//End
//...........................................******.........................................

//Chapter 35-38

//...........................................******.........................................

//Question 1
function time()
{

var date= new Date();
//document.write(date);
return date;
}

document.write(time());

//Question 2
 
function name()
{
var A;
var B;
A=window.prompt("Please enter first name");
B=window.prompt("Please enter last name");
document.write("Welcome ! ")
return A + B;
}
document.write(name());


//Question 3


function add()
{
var A;
var B;
A=window.prompt("Please enter first number"); 
B=window.prompt("Please enter second number");
return +A + +B;

}
document.write(add());


//Question 4


function operator()
{
var num1;
var num2;
num1=window.prompt("Please enter first number"); 
num2=window.prompt("Please enter second number");
return +num1 + +num2;

}
document.write(operator());

//Question 5
function square()
{
var num1;
num1=window.prompt("Please enter number"); 
return +num1 * +num1

}
document.write(square());

//Question 6
var A;
var i;
var B;
function factorial()
{
A=window.prompt("Please enter the number")
for(i=A; i>0; i=i-1)
{

}


}
document.write(factorial());

//Question 7

function counting()
{
var num1;
var num2;
var i;
num1=window.prompt("Please enter first number"); 
num2=window.prompt("Please enter last number");
for(i=num1; i<num2; i++)
document.write(i +"<br>");
return i;

}
document.write(counting());


//Question 8
var B;
var P;
var Base;
var Perpendicular;
var Hypotenuse;
function calculateHypotenuse()
{
B=window.prompt("Please enter the Base of a triangle ");
P=window.prompt("Please enter the perpendicular of a triangle ");
Base=B*B;
Perpendicular=P*P;
Hypotenuse=Base+Perpendicular;
return Hypotenuse  
}

document.write(calculateHypotenuse())


//Question 9
function area()
{
var width;
var height;
var area;
width=window.prompt("Please enter width of rectangle ");
height=window.prompt("Please enter height of rectangle ");
area=width*height;
return area;

}
document.write(area());

//Question 10





//Question 11
var str=window.prompt("Please enter the string");
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("EXAMPLE STRING :" +str +"<br>" +"EXPECTED OUTPUT :")
document.write(uppercase(str));



//Question 12
var str=window.prompt("Please enter the string");
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("EXAMPLE STRING :" +str +"<br>" +"EXPECTED OUTPUT :")
document.write(find_longest_word(str));


//Question 13
var str=window.prompt("Please enter the string ");
var letter=window.prompt("Please enter the world ");
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("Sample arguments : " +"'" +str +"'" +","  +"\n " +"'" + letter +"'" +"<br>")
document.write(char_count(str,letter));

//Question 14
radius=window.prompt("Please enter the radius of circle ");
var radius;
var circumference;
var area;


function calcCircumference(radius)
{
circumference=2*3.142*radius;
return circumference;
}

function calcArea(radius)
{
    area=3.142*radius*radius;
    return area;
}

document.write("The circumference is " +calcCircumference(radius) +"<br>");
document.write("The area is " +calcArea(radius))

//End
//...........................................******.........................................




