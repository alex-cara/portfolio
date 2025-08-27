export const cpp_code = `int chain_subsets(int n) {
  int a = 1;
  int b = 2;
  for (int i = 1; i < n; i++) {
    int tmp = a + b + 1;
    a = b;
    b = tmp;
  }
  return a;
}`;

export const three_loop = `fn faster_o_n(nums: Vec<i128>, k: i128) -> i128 {
  let mut map = HashMap::new();
  for i in nums.iter() {
    /* Insert elements into hashmap */
  }

  for i in map.keys() {
    connect_chain(map.get(i - k), map(i), map(i + k));
  }

  let mut total = 0;
  for i in map.keys() {
    /* let chain_length = ... */
    total += chain_length + total * chain_length;
  }

  total
}`;
