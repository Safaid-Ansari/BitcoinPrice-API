## BitcoinPrice-API

# Project Setup in Local System 

1. git clone or download the file 
2. run command  npm install 
3. run command npm start 
4. localhost:8000



## Build the following API : 

1.Create an API for fetching the price of Bitcoin in real time.
  •get request >  url : localhost:8000/Bitcoin/price 

2.Every time the price of bitcoin is fetched it is stored in a database table.

  •store in db after fetch the price 
3.Create an API to get the list of Bitcoin prices (With timestamps with pagination, 10 items per page)

  •get request > url : localhost:8000/Bitcoin/price/all
  
4.The API should use some authentication - else it should return 401

  1•  create a user and enter the value for creating a user [name,email,password,confirm_password]
  
     •post request > url : localhost:8000/Bitcoin/users/create 
     
  2•  login a user and enter value [email,password]
     •get request > localhost:8000/Bitcoin/users/sign-in
  
  
 Hosted Link : 
 
