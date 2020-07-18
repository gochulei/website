---
id: public-demo-wallet
title: 'Try the Public Demo Wallet (web)'
sidebar_label: Try the Demo Wallet


---



## Overview

The demo wallet has been made available to allow developers to try out a wallet running on the testnet. It is meant to run as a public, online demo service. The wallet demonstrates the following use cases:

* Sending Libra Coins to another Libra wallet address.
* Receiving Libra Coins from another Libra wallet address.
* Exchanging fiat money for Libra Coins and vice versa.
* Converting between the different Libra currencies.
* Viewing transaction history.
* Basic risk management and AML compliance flows.

The main purpose is to demonstrate common use cases when working with Libra Coins. To illustrate key Libra wallet concepts, we’ve simplified the implementation and avoided some of the complexities of real world, production-grade financial software.

**Note:** *The wallet uses simulated user information.* 



### User flows

The image below details the different user flows for the Demo Wallet.



### Use the Demo Wallet

Check out the embedded demo of the Web version of the reference wallet hosted at [https://demo-wallet.libra.org](https://demo-wallet.libra.org). 



## Create your account and login

Since this is a demo, login and authentication is simulated using auto generated fake user data. 

##### Register and sign up

New users who want to use the Public Demo Wallet go through a simulated registration process. The registration process simulates the following steps:

* Protects the user’s personal information.
* Assessment of the risks involved in maintaining a business relationship with the user.
* Compliance with KYC guidelines and AML regulations as required by law.

During registration, the user of the demo is presented with the screen shots and process flows that simulate a user asked to provide the information that would be required for proper identity verification and account security. The simulated registration process collects this information in multiple steps:

1. Login credentials, including a strong and unique password.
2. Personal details, including name, date of birth, and phone number.
3. Country of residence.Address.
4. Photograph of an officially recognized identification document (e.g., a passport or driver’s license, as defined by the local jurisdiction).
5. The base currency used for presentation of the conversion rates.

As noted above, all login details for the Libra Reference Wallet Demo will be fake credentials for “Sherlock Holmes”. The account verification begins once the user completes the registration demo. The user won’t be able to access the wallet until they have gone through the simulated account verification process.

**Note:** *Account verification demos the expected behavior of a hypothetical wallet. For the Libra Reference Wallet, the verification succeeds automatically and the “pending” state is presented briefly to the user for demo purposes only. In addition, the identification document is always accepted and is not analysed or stored by the backend. Real-world user verification and risk management are beyond the scope of the reference wallet and contain many opportunities for further development.* 

Read more about the user verification [in the Risk section](risk-mod.md).

##### Sign in
The Public Demo Wallet is only accessible to authenticated users. When a user accesses the wallet website, the login page is the first page presented to the user. This is where the user is authenticated using the auto generated username and password.

Upon login, if a user is presented with a “Verification Pending” page, it means that the authentication has been successful but the user verification process is still underway.

The password can be reset using the “Forgot Password” link. Alternatively, if the user is not yet registered, they can proceed to register by activating the “Sign up” link on the page.


##### Sign out
A user can sign out of the wallet on the [Settings](#modify-settings) page.

##### Reset password
It is possible to reset the user password by entering a verified email address on the password reset page. The page is accessible by following the “Forgot Password” link on the login page. Note that the email address provided must be an address previously registered in the system. 

**Note:** *For the reference wallet, entering a known email address redirects the user immediately to the password change page, without sending the reset message.* 



## View home page

The home page is where most user actions are performed, and an overview of the wallet balances can be seen. The balances are displayed separately for each currency and as an approximation of the total amount.

User actions available on the home page include:

* View full transaction history for a currency; this can be activated by clicking an item in the balances list.
* Send Libra Coins.
* Receive Libra Coins.
* Add Libra Coins to the wallet; activated by clicking “Transfer” and then “Add.”
* Withdraw Libra Coins from the wallet; activated by clicking “Transfer” and then “Withdraw.”
* Convert between Libra currencies.![img](https://lh6.googleusercontent.com/n_0IP5r7dh7T0_8G853yK64gbsrzD126AwcKNwuaQ3JeVxja7Knomkg7taxA6mANltoyeyOBDXr23IIfeERceIPUNwAPcXTAq8_udHXfBDmuT4F-SZrlbPGeC-G--JveRTtwvMQa)





## Modify settings

On the Settings page, a user can sign out from the wallet, edit general preferences, and add payment methods.

The modifiable preferences are:

* Local currency—affects the base currency used in the currency exchange operations throughout the wallet.
* User interface language.

The supported payment methods are:
* Credit cards
* Bank accounts

In addition, the page shows the simulated username of the fictional active user. It is not possible to change the user’s username.![img](https://lh6.googleusercontent.com/4guvmPYuIGV8M7Eux5FwDjn-NIWvFScKQ5zaKwcfF5hVp_M7MEjLH74jgW7iR3RAprBF9e0z9-7dBNUWtTEqaw-gRfGAX_VxE-L2CKj6mnQ5MOP4r8_x5BBANqNdagGTYYLgoHTw) *Note: The payment methods are for demonstration purposes only. The supplied information is not validated, and no real transactions are made using the configured credit cards and bank accounts.* 



To change the wallet UI language, enter the Settings page and choose the desired language from the languages dropdown menu:![img](https://lh4.googleusercontent.com/AAFqeruyorNMDU1I4C_EWVzgWv4rnfiICk3j_Ti8vQuEvQHFawdxC3-8Zc67AprhWbO52nCJyxpfVdfj0z_OyFtHWuCDvdtQPeWCGJtLWrvgZBcvS3C6VJkFma8iiqfA9RTZ8xoG)

## Execute transactions

#### View transactions list

Choosing a specific Libra Coin currency on the home page shows all the wallet transactions for that currency in descending order. Transactions may be internal (i.e., off-chain), within the wallet’s network (e.g., Libra deposit from a credit card), or external (i.e., on-chain) on the Libra Blockchain (e.g., Libra transfer to some external Libra address).

![img](https://lh3.googleusercontent.com/w7v61PMguxpmZcjGO97pXo427r7ThfQObt2nWU58JyA9dFCO0WmCM5oj6LCb2MPX4VI1zgRtQLm8yOEneOkrHDhbHdigQfgFMt1iBeCKpRjCQsjW6ShmpL47H89BiVXl-z8Hv32Z)

Each transaction consists of:

* Direction (sent or received)
* Address
* Libra Coins amount
* Current fiat value in default fiat currency, as configured in the wallet settings
* Transaction execution date

#### Check transaction details

Clicking a transaction in the transactions list will open a window with transaction details. ![img](https://lh5.googleusercontent.com/l0FfZIzRkqCcng0J354tVNYpN8vXen5G6HtcdYYHx0YYl_VEBsp8uDUhmbT0Yf-ylo6akqf1tEBVh3qnjw7AJageLXkJ3vHOzSLtYHDo8l2krOjIeR8eJ9A-XPePrUNqclpX_4nT)



Each transaction consists of:

* Direction (sent or received)
* Libra Coins amount
* Current fiat value in default fiat currency, as configured in the wallet settings
* Transaction execution date and time
* Address 
* Libra transaction ID – Libra Blockchain transaction version with link to an external Libra Blockchain explorer, if applicable. If not applicable, as in the cases of internal transactions, the field will be marked as unavailable.

 

#### Deposit and withdraw Libra Coins

Users can deposit and withdraw Libra Coins to and from the Public Demo Web Wallet. 

When a user deposits a Libra Coin currency amount, the Public Demo Web Wallet simulates a purchase of Libra Coins using the user's credit card or bank account wire transfer.

*Note: For your safety and security, never use real credit card or bank account details.* 

To perform a deposit, follow these steps:

1. Make sure you have a payment method defined. Payment methods can be defined [on the Settings page](#modify-settings).
2. On the home page click “Transfer.”
3. Choose “Add.”
4. The user will be presented with a deposit dialog. You should specify:
   a. The funding method, which is one of the configured credit cards or bank accounts.
   b. The Libra currency to purchase.
   c. The amount to deposit. The deposit amount can be specified either in Libra Coins or in the fiat currency of choice; the wallet will calculate the correct price or the resulting Libra amount accordingly and reflect that in the dialog.
5. Click “Review.” The view will change to a confirmation dialog summarizing the purchase details, including the exchange rate.
6. Click “Confirm” to execute the purchase. Clicking on “Back” allows modification of the purchase details. Clicking on “X” in the top right corner cancels the operation.
7. Upon execution, the added funds will be reflected in the balances summary on the home page and in the transactions list.

The Libra withdrawal process is performed by clicking “Transfer” and then “Withdraw.” The process behaves very similarly to the deposit process. Upon withdrawal execution, the specified amount is deducted from the user balances.


#### Convert between Libra currencies

To convert from one Libra currency to another:

1. On the home page click 'Transfer'.
2. Choose 'Convert.''
3. The conversion dialog will be presented. You should specify:
    a. The source currency.
    b. The target currency.
    c. The amount, either in terms of the source or the target currency; the converted amount is calculated and reflected automatically to the user.
4. Click “Review.” The view will change to a confirmation dialog summarizing the conversion details, including the exchange rate.
5. Click “Confirm” to execute the conversion. Clicking on “Back” allows modification of the purchase details. Clicking on “X” in the top right corner cancels the operation.
6. Upon execution, the changes will be reflected in the balances summary on the home page and in the transactions list.


#### Send Libra Coins

To send Libra Coins to another address:

1. On the home page click “Send.”
2. The send dialog will be presented. You should specify:
    a. The specific Libra currency
    b. The destination address
    c. The amount, either in terms of the Libra currency or in terms of a fiat currency of choice; the counterpart is calculated and reflected automatically to the user.
3. Click “Review.” The view will change to a confirmation dialog summarizing the transaction details, including the exchange rate.
4. Click “Confirm” to execute the transaction. Clicking on “Back” allows modification of the purchase details. Clicking on “X” in the top right corner cancels the operation.
5. Upon execution, the changes will be reflected in the balances summary on the home page and in the transactions list.


#### Receive Libra Coins

Other wallets can send funds without any action on the receiving party’s side, assuming they know the target address. To see the address of a wallet, click “Request” on the home page. A wallet has a different address for each Libra currency. To get the correct address, the user should verify that the right currency is selected. The actual address is presented at the bottom of the dialog as clear text. It can be copied into the clipboard by clicking the available button, or scanned using the QR code.