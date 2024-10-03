function getTime(time) {
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hours ${minute}m ${remainingSecond} s ago`;
  }
  console.log(getTime(7865));
  