====================== [ Project Setup instructions ] ======================

There is no need to setup anything in your local machine, I have hosted Both Backend Server And React App on a free hosting website named vercel.
Below I am dropping link of Contract Generator Web App

Link: 

====================== [ Project Setup instructions ] ======================



============================ [ Language Stack ] ============================

Frontend: React.js ( With Redux Toolkit for state management )
Backend: Node.js
Database: NON-SQL ( MongoDb Atlas free tier )

============================ [ Language Stack ] ============================



=============================================================================
=========================== [ Frontend React App ] ==========================
=============================================================================

First Page login
    Admin Credentials
        Email Address - france@admin.com
        Password - franceAdmin
    
    Testing Customer Credentials
        Email Address - sam@gmail.com
        Password - samWitviky

        Email Address - joe34@gmail.com
        Password - joe_4321


Logout Feature resets React Applications state


admin Panel
    All Customers Api
    create NEW Customer
    Open Customer Details
        Customer Account Details
            Action - EDIT and DELETE
        Customer Contract Details
            Action - View
    Action - Edit Customer Account Details
    Action - Delete Customer Account (Delete Customer Account Details ass Well ass All the Customer's Contract)
    Action - View a single selected Customer's Contract
    Action - Approve / Reject Contract.


customer Panel
    All Contracts of customer
    Create new Contract
    view Single Contract Detail

=============================================================================
=========================== [ Frontend React App ] ==========================
=============================================================================



=============================================================================
========================== [ Backend Node Server ] ==========================
=============================================================================

All Routes

Login API:
    URL - https://france-exercise-server.vercel.app/auth/verify
    Method - POST
    Body - Credentials in JSON

All Customer Details API:
    URL - https://france-exercise-server.vercel.app/auth/customer
    Method- GET

New Customer API:
    URL - https://france-exercise-server.vercel.app/auth/customer
    Method - POST
    Body - Customer Data in JSON

Single Customer Details API:
    URL - https://france-exercise-server.vercel.app/auth/customer/:id
    Method - GET
    Param - Customer Id in param

Single Customer's all Contracts Details API:
    URL - https://france-exercise-server.vercel.app/customer/contract/:id
    Method - GET
    Param - Customer Id in param

Create new Contract API:
    URL - https://france-exercise-server.vercel.app/customer/contract
    Method - POST
    Body - Contract Data in JSON

Single Contract Details API
    URL - https://france-exercise-server.vercel.app/customer/contractpreview/:id
    Method - GET
    Param - Contract Id in param

Update Customer Details Api 
    URL - https://france-exercise-server.vercel.app/auth/customer/:id
    Method - PUT
    Param - Customer Id in param
    Body - Customer Updated Data in JSON

Delete Customer Account Api
    URL - https://france-exercise-server.vercel.app/auth/delete/:id
    Method - DELETE
    Param - Customer Id in param
    Body - Customer Id in JSON linked with Contracts

Update Contract Status API
    URL - https://france-exercise-server.vercel.app/customer/contract/:id
    Method - PUT
    Param - Contract Id in param
    Body - Contract Updated Status in JSON

=============================================================================
========================== [ Backend Node Server ] ==========================
=============================================================================



========================= [ Feature Unable to add ] =========================

# Unable to add any Electronic Signature Integration !

Tried my best to figure it out but despite my all efforts, I was unable to understand the necessary steps to follow to integrate it. I will be able to achieve it under Professional Person's guidance.

========================= [ Feature Unable to add ] =========================