<script>
	import ProjectLink from '$lib/components/ProjectLink/ProjectLink.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import { cpp_code } from './data.js';
</script>

<HomeButton color_for_button="text-gruv-yellow-dim" transition_color="#d79921"></HomeButton>
<div class="h-content m-auto w-[1000px] max-w-full items-center justify-center px-4 pb-4">
	<h2 class="text-gruv-yellow-dim m-auto text-center text-4xl">Number of Beautiful Subsets</h2>

	<p class="z-10 text-lg text-pretty">
		&emsp; Here is the leet code <a
			class="text-gruv-red-dim"
			href="https://leetcode.com/problems/the-number-of-beautiful-subsets/"
			target="_blank"
		>
			problem
		</a>. In case you don't want to read the problem, in essence you are given an array of numbers
		and a number k. You want to find the number of subsets possible, given a restriction (numbers
		exactly k apart can not be in the same subset) preventing some subsets. For a simple example
		with k = 10, and array=&lcub;1,2&rcub;, 1 and 2 are not exactly k apart, so they can appear in
		subset [1,2]. This subset also contains 2 other subsets: [1] and [2], making 3 in total. If k
		were 1 instead of 10, the subset [1,2] would be invalid leaving only 2 subsets. There is an
		assumption I made reading the problem description that messed me up (I'll be getting to that
		soon).
		<br /> &emsp;When I first came across this problem I knew it was supposed to be a DP problem,
		the hard part being how to setup the memozation properly. As I took my time to read over the
		problem I couldn't help but think that this was solvable using combinatronics. For example, if
		the provided array contains no elements that are exactly k apart, then the solution is
		relatively straight forward: 2^n - 1.
		<br /> &emsp;Calculating the amount of subsets in an array with conflicting elements is a lot
		more difficult. The first step I took was focusing on calculating the subsets provided by a row
		of conflicting elements (i.e k=1 and array=&lcub;1,2,3,4&rcub;). Here some assumptions were made
		on my part: only the length of the chain matters, order of the array does not matter, nor does
		the exact k matter. Using this as a foundation all I needed to was write a function that given
		the length of the chain produced the subsets.
		<CodeBlock code={cpp_code} lang="cpp"></CodeBlock>
		&emsp;This function does find the correct number of subsets for a chain of any length. The next problem
		to solve is knowing in O(n) time how long a chain is. To do this, you just need a hashmap and a struct
		that can be internally linked. Now you can insert an element into the hashmap, check if there are
		any elements + or - k away, and if so update the bounds of the chains and its length. Calculating
		the total subsets after you have the length of each chain is pretty simply, just loop of chain lengths
		and get total with:
		<CodeBlock code="total += chain_length + total * chain_length;" lang="cpp"></CodeBlock>
	</p>
	<p class="z-10 text-center text-2xl">
		Now just to submit it!
		<br />
		Oh wait, it doesn't work.
		<br />
	</p>

	<p class="z-10 text-lg text-pretty">
		&emsp;When I saw multiple repeating numbers in the input I felt snubbed of a cool victory. The
		problem never mentioned array would include only unique elements, but my interperation of set
		and subset was that of no repeating elements, so I was left high and dry. Trying to adapt the
		solution when elements could repeat was tough, since the internally linked hashmap no longer
		worked, as every value would need to link to the correct bounds, and my function was useless. So
		I came up with a 3 loop approach. First, populate the hashmap with repeats, this helps solves
		the bounds issue later on as you won't have interior accesses to the chain. Then connect
		elements together in the chain (while calculating subsets at the same time). Lastly, calculate
		total like before. This solution actually works, I submitted it and it is within the fastest
		solutions, but with some variance: being faster than 100% of submissions, or 93%.
		<br />
		&emsp; I was curious if the best algorithm that Leet provided (written by a user called Shivam Aggarwal)
		was faster. I suspected that since the problem had a small n, and the fact that Shivam's algorithm
		was nlogn it would be faster. Well, I wanted to actually analysis and see if I could get my solution
		to be faster, but to make things "fair" I knew n had to be larger than the max 18 specified by leet.
		Doing some mental math I was indexing into a hashmap 5n times, along with more pointer derefences
		to random memory locations in the map. An n of atleast 64 such that log n would be equal to my map
		indexing would make a more equal field. So I converted both algorithms to rust and used i128 and
		capped n at 126 (to avoid any integer issues). Now time to compare and improve. I made some tests,
		setup criterion for some finer benchmarking, and ran the code. My algorithm was significantly slower,
		around half the speed. So first thing first, the easier pickings. Rust's hashmap implementation for
		getting the keys loops over ALL memory buckets allocated in the hash, I stored unique keys into an
		array and used that to loop over the map instead. My next thought was to minimize branches, but in
		my connect function they were used to prevent null pointer derefences, so it felt hard to remove,
		so I thought to use a zeroed out struct, and in a parallel thought I considered moving more of the
		accessess to an array, in an attempt to better cache results. The result of this started to approach
		Shivam's implementation being faster in certain situations and worse in others (varying chain length).
		At this point I felt it hard to think of any more major improvements that could be made. Perhaps
		I could reorder some math expressions and simplify some parts, but I had a gut feeling this would
		be a minimal gain. Just to be sure I ran a flamegraph and most of the time was spent on hash calculations.
		As Rust's default hash has some focus on HashDoS attack resistance, that slow it down, so swapping
		it out brought the solution to twice the speed of Shivam's.
	</p>
</div>
