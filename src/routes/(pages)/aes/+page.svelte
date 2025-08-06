<script>
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	const rust_code = `for i in 0..2 {
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
</script>

<HomeButton color_for_button="text-gruv-aqua-dim"></HomeButton>

<div class="m-auto h-full w-[1000px] items-center justify-center pb-4">
	<div><h2 class="m-auto text-center text-5xl">Rust AES</h2></div>
	<!-- <div><img src={Artifact1} /></div> -->
	<div>
		<p class="z-10 text-xl text-balance">
			&emsp; This is an AES encryption algorithm I built in Rust, based entirely on the FIPS 197
			specification. Rather than using hardware AES instructions, by targeting compilation systems,
			and calling assembly directly I wanted to follow the pseudocode more directly. The project
			focused on idiomatic Rust, high performance, and keeping to the algorithm as described in the
			document. The program is a CLI tool that uses I/O from the file system (i.e. hard drive/ssd),
			processes it, and writes the encrypted or decrypted output. Since file I/O tends to be the
			main performance bottleneck, multithreading can only do so much. Despite this, I implemented a
			system that allows files to be prefetched and loaded while computation is being done on other
			files. This overlap between computation and I/O helps maximize performance within hardware
			limits, trying to optimize around the I/O bottleneck. It also involved structuring the code in
			a clean, modular way using idiomatic Rust features like traits, iterators, and ownership
			principles. Overall, this project demonstrated my ability to learn off of a simple document
			specification, and my low-level performance tuning.
			<br />
			&emsp;Here is a multithreaded file reader that allows prefetching of files, and calls the function
			for the computation and reading in files.
		</p>
	</div>
	<div class="border-4xl">
		<CodeBlock code={rust_code} lang="rs" />
	</div>
</div>
