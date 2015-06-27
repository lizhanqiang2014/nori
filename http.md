#网站的访问流程
1.打开网站，输入的网址，http://www.nodejs.org/
2.解析域名 对应服务器ip 建立连接
3.发送请求，服务器处理请求，相应数据
4.客户端接收到服务器的响应，然后根据内容的类型进行渲染。
html(html标签 css javascript)
link script
5.实现动态的js效果
6.在通信的过程中
语言-》协议http
文字-》HTML xml text image

#node后台的问题
1.如何把服务器上的文件返回给客户端？  fs
2. 如何定位文件？ path
3. 如何把图片的内容返回给客户端进行正确解析？ buffer
4. 发送的时候如何控制速度？  stream
5. 如何记录日志 console
6. 如何传输数据库   udp，tcp
7. 如何对数据进行压缩  gzip
8. 如何对数据进行加密  crypto
9. 如何利用多核cpu？如何取服务器的信息。。。？？
10.如何与数据库进行交互
