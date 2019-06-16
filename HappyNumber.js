//numbers we are looking for are 1, 7, 10, 13, 19.
var happy = []
var Q = 0;
var cur = 0;
var curnum = [];
var curnum1 = 0;
var curnum2 = 0;
var curnum3 = 0;
while(happy.length !== 5){
  Q++;
  let res = Q;
  let sad = [];
  let strArr = [];
  while(modeExist(sad)==false){
    curnum=res.toString();
    strArr = curnum.split("");
    if(strArr.length==1){
      curnum1 = parseInt(strArr[0], 10);
      res=curnum1**2;
      sad.push(res);
    }else if (strArr.length==2){
      curnum1 = parseInt(strArr[0], 10);
      curnum2 = parseInt(strArr[1], 10);
      res=curnum1**2+curnum2**2;
      sad.push(res);
    } else {
      curnum1 = parseInt(strArr[0], 10);
      curnum2 = parseInt(strArr[1], 10);
      curnum3 = parseInt(strArr[2], 10);
      res=curnum1**2+curnum2**2+curnum3**2;
      sad.push(res);
    }
    if(res==1){
      happy.push(Q);
      break;
    }
  }
}
console.log(happy);

function sort (arr){
  var holder = 0;
  var end = 0;
  for(var i=0; i<=arr.length-1; i++){
    for(var j=arr.length-1; j>=end; j--){
       if(arr[j]<arr[j-1]){
        holder=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=holder;
      }
    }
    end++;
  }
  return arr;
}
function modeExist(arr){
  var data = sort(arr);
  var rdata = [];
  var tally = 0;
  var spot = 0;
  var max = 0;
  var ref = 0;
  for (var i = 0; i < data.length; i++) {
    if(arr[i]>max){
      max=arr[i];
    }
  }
  for(var i = 0; i<=max; i++){
    let tally=0
    for(var spot = 0; spot<=max; spot++){
      if(data[spot]==ref){
        tally++;
      }
    }
    rdata[ref]=tally;
    tally=0;
    ref++;
  }
  var out = false;
  var modeValue =0;
  for (var i = 0; i < rdata.length; i++) {
    if(rdata[i]>1){
      out=true;
    }
  }
  return out;
}
