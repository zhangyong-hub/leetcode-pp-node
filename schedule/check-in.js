const { getDay } = require("../utils/day");
const us = require("../static/users/index");
const mySolutions = require("../static/my/solutions.json");

// 下面代码没有考虑一个人中途加入，那么他没有加入之前也会被统计为未打卡。
const allUsers = JSON.parse(JSON.stringify(us));

function run(n) {
  // 返回7天内所有已经打卡的
  // false 表示是否满勤
  function fullCheckIn() {
    const users = [];
    const day = getDay();

    for (const name in mySolutions) {
      const solutions = mySolutions[name];
      let i = 1;

      while (i <= day) {
        if (!solutions || !solutions[i - 1]) {
          break;
        } else if (i == day) {
          users.push(name);
        }
        i++;
      }
    }
    return users;
  }
  function checkWithinNDays(n) {
    const users = {};
    const day = getDay();
    if (day <= n) return allUsers;
    for (const name in allUsers) {
      const solutions = mySolutions[name];
      let i = Math.max(day - n, getDay(allUsers[name].createTime));

      let count = 0;

      while (i <= day) {
        if (!solutions || !solutions[i]) {
          count += 1;
        } else {
          count = 0;
        }
        if (count == n) {
          break;
        }
        i++;
      }

      if (count < n) {
        users[name] = true;
      }
    }
    return users;
  }

  function diff(A, B) {
    for (const name in B) {
      delete A[name];
    }
    return Object.keys(A);
  }

  console.log(`no check within ${n} days`, diff(allUsers, checkWithinNDays(n)));
  console.log(`full check`, fullCheckIn());
}

run(7);
