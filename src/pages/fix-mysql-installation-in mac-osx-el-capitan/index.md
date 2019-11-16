---
title: Fix mysql installation in your Mac OSX EL Eapitan 10.11.16
date: "2019-05-31"
featuredImage: './caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg'
---

Few weeks ago I messed up with mysql 5.5 that was preinstalled in el capitan system. I wanted to install latest version of mysql but I realized I won't be able to install latest or even recent version as I have older version of mac; late 2008 model ! Then I searched through mysql website and found a wrong version ~~mysql-5.7.26-osx10.14-x86_64~~ which is for mac osx 10.14.XX. 

<!-- end -->

After I installed that version, mysql didn't startup and I had to go through lots of shits process and eventually deleted all my databases! *Error keep coming : PID is not found and mysql.socket is not found* type error. I gave up for 2 weeks. Today I again sit down and installed correct version [mysql-5.7.16-osx10.11-x86_64](https://downloads.mysql.com/archives/community/) of mysql for my osx version 10.11.16. And again it works nicely.

**What I realized is correct version of mysql is important for your OS. After install the correct version, you need to login to mysql via terminal. You need to reset your old/temporary mysql password and create new password!** 

Old/temporary password was created by mysql while it was installing. So keep a note of that password. 

Let's login to mysql server.

So this is how it goes: 

In terminal, type:

`mysql -u root -p`

It will ask your old/temporary password. Type it. It will show following message in terminal.

`Welcome to the MySQL monitor.  Commands end with ; or \g.`
`Your MySQL connection id is 18`
`Server version: 5.7.16`

`Copyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.`

`Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.`

`Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.`

Now change old password to a new password. Type:

`SET PASSWORD = PASSWORD('your_new_password');`

It will output something like this:

`Query OK, 0 rows affected, 1 warning (0.00 sec)`

Now you can see your existing databases by typing:

`show databases;`

You can now create a new database using mysql command or you can use GUI app like **SequelPro** for mac.

While logging to SequelPro, you need to enter your login details of mysql server.

`Username: root`
`Password: your_new_password`

and then click connect button.

It will connect and you can see existing databases and create a new database easily.

Thats it. Hope it helps someone who was struggling :)
