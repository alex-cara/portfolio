export const rust_code = `for i in 0..2 {
thread::scope(|s| {
  s.spawn(|| {
    for j in 0..((num_files + (1 - i)) / 2) {
      let curr_file = fs::read(&files[i + 2 * j]);
      let mut curr_file = curr_file.unwrap();
      /* Do decryption/encryption based on user input */
      match (args.reverse, use_iv) {
        (false, false) => data_encrypt(&mut curr_file, &expanded_key),
        (false, true) => data_encrypt_iv(&mut curr_file, &expanded_key, &iv),
        (true, false) => data_decrypt(&mut curr_file, &expanded_key),
        (true, true) => data_decrypt_iv(&mut curr_file, &expanded_key, &iv),
      };

      let _ = fs::write(
        files[i + 2 * j].to_owned() + enc_or_dec,
        &curr_file[0..curr_file.len()],
      );
    }
  });
});
`;
