# World Tour App

### Netlify URL

##### https://worldtourapp-ui-annamraaj.netlify.app/

### subdomain

#### https://worldtour.fwsa.in
## Pages:-
  * Home &nbsp;&nbsp; (completed)
  * About us &nbsp;&nbsp; (completed)
  * Gallery &nbsp;&nbsp;   (completed)
  * Contact us &nbsp;&nbsp;(completed)
  * Review &nbsp;&nbsp; (completed)
  * Login &nbsp;&nbsp;(completed)
  * My Account  &nbsp;&nbsp; (Completed)

## Features:-

   ##### * Register page  &nbsp;&nbsp; (Completed)
   * All input fields are required.
   *  User name must contain 3 characters and must not be empty and must not contain spaces between name
   * Moblie number validation is done.
   * Email id entered must not exist in local storage already.
   * Password and Confirm password fields must contain same value.
   * User sholud atleast have 10 years to create an account.

   ##### * Login page &nbsp;&nbsp; (Completed)
   * All input fields are required. 
   * Email id and password should match with the local storage content.
   * Here there is also Admin_Login page
   
   ##### * Admin Login &nbsp;&nbsp; (Completed)
   * Here,we have to login using Admin Credentials. 
   * Admin_ID : WT000ADMIN
   * Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: FWSA

   ##### * Add new Trips { Only Admin Access }  &nbsp;&nbsp; (Completed)
   * After login using ADMIN credentials then we will be redirected to new trips adding page .There Admin can add new trips.   

   * In new trip adding  page admin can give details of the trip like place name , guide name , pick up point. 

   * After clicking on submit all the details will store in local storage.
   ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Acceptance Criteria
   * All fields are requiried and should not be empty.
   * Name should be valid (Nameshould atleast contain 3 letters.)
   * Trip name should not be empty.
   * Trip cost must be  more than 5000 and negative values are not accepted.
   * Trip that already exists will not get added into the list.
   
  #####  * New trips page (Completed)
   * In home page if we click on new trips we will be redirected to this page. 
   * In this page new  trips will be dispalyed which were added by admin.
   * If we click on the particular trip we can book ticket. 

   ##### *Add Review  &nbsp;&nbsp; (Completed)
   * In review page if Customer click on the link given there he will be redirected to add review page.
   * Here Customer can add their reviews.
   * After customer adding his/her review, name of the customer and Review will store in local storage.
   #####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Acceptance Criteria
   * Customer name should be valid(Name must contain more than 3 letters).
   * Review cannot be empty.

   ##### * View Reviews &nbsp;&nbsp; (Completed)
   * Here we can see the reviews of the customer.
   * we will get the values from the local storage and display here.

   
   ##### * Search Box &nbsp;&nbsp; (Completed)
   * We can see this search bar in home page.
   * Here we have to give correct values if not it will show an Error "Page Not Found!".
    The Values are:-

   * Holiday trips
   * Summer trips
   * Pilgrimage trips
   * Newyork trip
   * Paris trip
   * Singapore trip
   * Delhi trip
   * Agra trip
   * Ooty trip
   * Darjeeling trip
   * Araku trip
   * Varanasi trip
   * Tirumala trip
   * Hajj trip
   * Jerusaleum trip

   
   ##### * Log Out &nbsp;&nbsp; (Completed)
   * In Home page we can see My Profile in Nav bar if we click on that we will be redirected to my account page if have alredy ogged in if not it will ask to lohin.
   * In that page we can see Log Out button if we click on that we can log out from the logged in account.
   * By clicking on that Log Out local storage will get be cleared.