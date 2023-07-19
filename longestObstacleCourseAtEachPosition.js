function longestObstacleCourseAtEachPosition(obstacles) {
    const n = obstacles.length;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let m = 0;
    for (let j = 0; j <= i; j++) {
      if (obstacles[j] <= obstacles[i]) {
        m = Math.max(m, dp[j]);
      }
    }
    dp[i] = m + 1;
  }

  return dp;
}


console.log(longestObstacleCourseAtEachPosition([1,2,3,2]))