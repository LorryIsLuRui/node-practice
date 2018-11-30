//  大部分 fs 操作接受字符串、Buffer、或使用 file: 协议的 URL 对象作为文件路径。
//  字符串形式的路径会被解释为表示绝对路径或相对路径的 UTF-8 字符序列。 相对路径会相对于 process.cwd() 定义的当前工作目录进行处理。
// 对于大多数 fs 模块的函数，path 或 filename 参数可以传入 WHATWG URL 对象。 只支持使用 file: 协议的 URL 对象。
            // const fs = require('fs');
            // const fileUrl = new URL('file:///tmp/hello');   //file: URL 必须是绝对路径
            // fs.readFileSync(fileUrl);
const fs=require('fs');
console.log(fs.readFileSync('./test1.txt','utf8'));
const fd=fs.openSync('./test1.txt','r+');
fs.truncateSync(fd,2);
// fs.ftruncate(fd,9,err=>{
//     if(err) throw err;
//     console.log(fs.readFileSync('./test1.txt','utf8'));
// })
/*
    const res=fs.createReadStream('./test',{
        flags:"r",
        encoding:"utf8",
        autoClose:true,
    });
    console.log(res)
*/
/*
    fs.copyFile('./test/3.txt','./test1.html',(err)=>{
        if(err){
            console.log(err)
            throw err;
        }else{
            console.log('copyfile succ');
        }
    })
*/
/*
    // fs.chown 异步的改变文件所有者和群组，完成回调只有一个可能的异常参数
    fs.chown('./test',1,20,err=>{
        if(err){
            console.log(err)
            throw err;
        }
        console.log('chown succ');
    })
*/
/*
    // fs.chmod, 改变文件权限
    fs.chmod('./test',0o777,(err)=>{
        if(err){
            console.log(err);
            throw err;
        }
        fs.rename('./test','./test1',(err)=>{
            if(err){
                console.log(err);
                throw err;
            }
            console.log('rename succ');
        })
    })
*/
/*
    // fs.appendFile 异步对一个文件的内容进行追加，如果此文件不存在则创建
    // fs.appendFile('./test/3.txt','ddd',(err)=>{
    //     console.log(`data append succ1`)
    // })
    // file可能是一个数字文件描述符 open/openSync，这样的文件描述符不会被自动关闭
    fs.open('./test/3.txt','a',(err,fd)=>{
        if(err) throw err;
        fs.appendFile(fd,'呼呼',(err)=>{
            fs.close(fd,err=>{
                if(err) throw err;
            })
            if(err) throw err;
            console.log('data append succ2')
        })
    })
*/
/*
    // fs.accessSync,同步
    try{
        let res=fs.accessSync('./test',fs.constants.W_OK | fs.constants.X_OK);
        console.log(`res 值为${res}表示检查成功`);
    }catch(err){
        console.log(err);
    }
*/
/*
    // fs.access 测试指定的文件或目录的用户权限
    const file='./test';
    fs.access(file,fs.constants.X_OK | fs.constants.W_OK,(err)=>{
        if(err){
            console.log(`${file} ${err.code === 'ENOENT'?'不可被执行':'只可写'}`);
        }else{
            console.log(`${file} 可被执行且可写`);
        }
    })
*/
/*
    // 写入一个文件
    // 推荐
    fs.open('./test/2.html','wx',(err,fd)=>{
        if(err){
            console.log(err);
            if(err.code==='EEXIST'){
                console.log('file exist');
                return;
            }
            // throw err;
        }
        else{
            console.log('create file');
        }
    })
*/
/*
    fs.mkdir('./datas',err=>{
        if(err) throw err;
        console.log('create succ');
    })
*/
/*
    fs.watch('./test',{encoding:'utf8',recursive:true,persistent:true},(eventType,filename)=>{
        console.log(`事件类型是：${eventType}`);
        console.log('filename:'+filename);
    });
    setTimeout(()=>{
        fs.unlink('./test/1.txt',err=>{
            if(err) throw err;
            console.log('del succ');
        });
    },1000);
*/
/*
    fs.readdir('./test',{encoding:'utf8',withFileTypes:true},(err,files)=>{
        if(err) throw err;
        console.log(files);
    })
*/
/*
    // open 打开一个文件
    // @params path 文件、文件夹 路径
    // @params flag 文件打开的行为  详情见xmind
    // @params mode 设置文件模式（权限），文件创建默认权限为0666（可读可写）
    // @params callback 回调函数，有两个参数
    //字符串形式的路径
                // fs.open('./test/h.html','r+',(err,fd)=>{
                //     if(err) throw err;
                //     console.log(fd);//当前打开的文件
                //         fs.close(fd, (err) => {
                //             if (err) throw err;
                //         });
                // })
    // Buffer形式的路径
                // fs.open(Buffer.from('/workspace/node-practice/fs/test/h.html'),'r',(err,fd)=>{
                //     if(err) throw err;
                //     fs.close(fd,err=>{
                //         if(err) throw err;
                //     });
                // })
*/
/*
    // stat 获取文件、文件夹属性
    fs.stat('./test',(err,stats)=>{
        if(err) throw err;
        console.log(`file stats:${JSON.stringify(stats)}`);
    });
*/
/*
    // rename按照第二个参数的path和文件名，原始文件会被删掉,如果两个参数相同，则不会做任何改变，  此方法不会改变文件内容
    fs.rename('./1','./test',err=>{
        if(err) throw err;
        console.log('rename succ');
    })
*/
/*
    // unlinkSync 同步，只能操作文件，不能操作文件夹，不然会报错
    console.log('1');
    try{
        fs.unlinkSync('./test/test.txt');
        console.log('success dele');
    } catch(err){
        console.log(err);
    }
    console.log('2');
*/
/*
  //unlink  异步,只能操作文件，不能操作文件夹，不然会报错
    console.log(1);
    fs.unlink('./test/hhhh.txt',err=>{
        if(err) throw err;
        console.log('delete success ./test');
    });
    console.log(2);
    fs.unlink('C:/Users/lurui/Desktop/download-excel.xlsx',err=>{
        if(err) throw err;
        console.log('delete success ./test');
    });
*/