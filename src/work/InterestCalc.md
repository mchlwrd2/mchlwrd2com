---
layout: work.njk
title: "Implementing a Calc into Online/Mobile Banking"
date: 2025-11-19
tags: ["work","financial-wellness", "development", "ux-design", "banking"]
description: "A concept for integrating interest transparency into digital banking platforms."
---

For years, I've thought that it's difficult for people to internalize and understand how interest rates work. I've known people who seek high interest rates on checking accounts with an average balance less than $2k, and others who shrug off carrying a credit card balance because they can cover the monthly minimum; penny wise, pound foolish.

Interest is the tool that normalizes for the present value of money. Visa is happy to issue an unsecured short-ish term $5k loan for a couple of reasons, but the one that burns people the most is not understanding how quickly it adds up. 



### What can we do about this?

Credit card statements typically include some section that describes how long it will take to pay off with monthly minimums only and how much that might cost over time, but in the age of the automatic payment and PFM tools, I’d wonder how many people even see their statements anymore.

Between a third and a half of digital banking users check their app every multiple times a week. Moreover, an FI has a vested interest in the financial security and education of their customers/members. With all of that in mind, I built this simple interest calculator as a proof of concept to integrate within Banno digital banking.

The base example highlights how a $5,000 purchase at 21% APR over 24 months results in interest costs exceeding 20% of the original price.

![Payoff Calculator UI](/documents/CalcScreenshotSmall.png)
*$5k turns into $6.2k very fast!*


https://youtu.be/yAzrd9rqgto

Here's the thing, just be nice: mchlwrd2.com/calc3

### (Potential?) Future Roadmap

Again, this is a proof of concept that would expand the usage of a digital banking app. I think the best implementation would be in a platform that allows some customization of their home dashboard layout, and would focus on the products that the bank offers in some form (ie, don't include a Mortgage version if not engaged with that product).


Beyond the immediate benefit of user education, these tools offer secondary business value:
1.  **Targeted Marketing:** A user interacting with a mortgage calculator is a prime candidate for mortgage product information.
2.  **Financial Health:** Even without direct product marketing, these interactions enhance the user's overall financial literacy.
3.  **Full Financial Picture:** Depending on the product, it's likely possible to pull in credit card balances to pre-populate some of these fields with something like "current balances + new balances" for a more full financial picture.

Customers/Members are going to look for this type of information at some point, and something like this is lightweight enough that it might be worth implementing within an FI's digital platform. On the other hand, I'm sure NerdWallet, BankRate, and any other number of providers of these simple calculators are happy to have the traffic and marketing dollars flow their way.