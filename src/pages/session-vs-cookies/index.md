---
title: Differences between Session and Cookies in PHP
date: "2019-05-20"
featuredImage: './jade-wulfraat-4fl4XVhH8Y4-unsplash.jpg'
---

What are the difference between Session and Cookies in PHP?

<!-- end -->

| Session                                                                   	| Cookies                                                                            	|
|---------------------------------------------------------------------------	|------------------------------------------------------------------------------------	|
| Data are stored on server.                                                	| Cookies Data are stored on client side or user's browser.                          	|
| Session data are more secured as they never travel on every HTTP request. 	| Cookies data are less secured as they are travel with each and every HTTP request. 	|
| You can store the objects in session ( Store large amount of data ). 	| You can store only string type of data in cookies ( Max file size is 4kb ). 	|
| Session cannot be used for future references. 	| Cookies are mostly used for future references. 	|