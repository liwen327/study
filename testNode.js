{\rtf1\ansi\ansicpg936\cocoartf1504
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue117;\red109\green109\blue109;\red38\green38\blue38;
\red82\green0\blue83;\red16\green121\blue2;\red11\green84\blue83;}
{\*\expandedcolortbl;\csgray\c100000;\cssrgb\c0\c0\c53333;\cssrgb\c50196\c50196\c50196\c4706;\cssrgb\c20000\c20000\c20000;
\cssrgb\c40000\c0\c40000;\cssrgb\c0\c53333\c0;\cssrgb\c0\c40000\c40000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl320\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var\cf4 \strokec4  http = \cf5 \strokec5 require\cf4 \strokec4 (\cf6 \strokec6 "http"\cf4 \strokec4 );\
\
http.createServer(\cf2 \strokec2 function\cf5 \strokec5 (request, response)\cf4 \strokec4  \{\
    response.writeHead(\cf7 \strokec7 200\cf4 \strokec4 , \{\
        \cf6 \strokec6 "Content-Type"\cf4 \strokec4  : \cf6 \strokec6 "text/plain"\cf4 \strokec4 \
    \});\
    response.write(\cf6 \strokec6 "Welcome to Nodejs"\cf4 \strokec4 );\
    response.end();\
\}).listen(\cf7 \strokec7 8000\cf4 \strokec4 , \cf6 \strokec6 "127.0.0.1"\cf4 \strokec4 );\
\
console.log(\cf6 \strokec6 "Creat server on http://127.0.0.1:8000/"\cf4 \strokec4 );}