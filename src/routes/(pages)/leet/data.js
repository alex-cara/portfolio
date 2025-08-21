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
