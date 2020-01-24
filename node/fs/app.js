// fs模块的操作
const fs = require('fs')
const path = require('path')

const realtiveURL = '/Users/zhanghefan/Desktop/web/web_study/daily';

function getFileResolve (fileName) {
  let regex = /^\w+$/;
  if(regex.test(fileName)) {
    fileName = './' + fileName + '.md';
  } else {
    fileName = './' + Date.now().toString()
  }
  return path.resolve(realtiveURL,fileName)
}

// 读文件
// fs.readFile( fileResolve , { flag: 'r' } ,function (err,data) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })

// 写文件
// var data = "# 2020年01月24日 学习日记\n"
// fs.writeFile(getFileResolve('20_01_24') , data , function (err) {
//   if(err) {
//     console.warn(err)
//   } else {
//     console.log('写入文件成功')
//   }
// })

// 操作文件 读出/写入
fs.open('./test.txt' , 'w+' , function (err , fd) {
  if(err) {
    console.log(err)
  } else {
    // use Buffer.alloc() instead of new Buffer()
    // let aB = Buffer.alloc(20)
    // fs.read(fd , aB , 0 , 10 , 0 , function (err , bytesNum , buffer) {
    //   if(err) {
    //     console.log(err)
    //   } else {
    //     console.log('bytesNum: ' , bytesNum)
    //     console.log('buffer是否指向aB' , buffer === aB)
    //     console.log(aB)
    //   }
    // })
    let aB = Buffer.from('我喜爱编程?')
    fs.write(fd,aB,3,13,0,function (err,written,buffer) {
      if(err) {
        console.log(err)
      } else {
        console.log("写入长度written:" , written);
        console.log('buffer是否指向aB' , aB===buffer);
        console.log(aB)
        fs.fsync(fd , function (err) {
          if(err) {
            console.log(err)
          } else {
            fs.close(fd, function () {
              console.log('文件关闭')
            })
          }
        })
      }
    })
  }
})