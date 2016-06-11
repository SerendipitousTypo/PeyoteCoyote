let formatDate = (context, prop)  => {
  let month = context.state[prop].getMonth() + 1; 
  let day = context.state[prop].getDate(); 
  let year = context.state[prop].getFullYear();

  return month + "/" + day + "/" + year;

}

let formatTime = (context, prop) => {
   let hr = context.state[prop].getHours() > 12 
     ? context.state[prop].getHours() - 12 
     : context.state[prop].getHours() === 0 ? 12 : context.state[prop].getHours();
   let min = context.state[prop].getMinutes() <=9 ? '0' + context.state[prop].getMinutes() : context.state[prop].getMinutes();
   let suf = context.state[prop].getHours() > 12 ? 'PM' : 'AM';

  return hr + ':' + min + ' ' + suf;

}

let formatDateTime = (date)  => {
  var monthArr = [];
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";


  let month = monthArr[date.getMonth()]; 
  let day = date.getDate(); 
  let year = date.getFullYear();
  let hr = date.getHours() > 12 
    ? date.getHours() - 12 
    : date.getHours() === 0 ? 12 : date.getHours();
  let min = date.getMinutes() <=9 ? '0' + date.getMinutes() : date.getMinutes();
  let suf = date.getHours() > 12 ? 'PM' : 'AM';

  return month + ' ' + day + ', ' + year + ' @ ' + hr + ':' + min + ' ' + suf;
}


module.exports.formatDate = formatDate;
module.exports.formatTime = formatTime;
module.exports.formatDateTime = formatDateTime;