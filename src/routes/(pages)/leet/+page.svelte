<script>
	import ProjectLink from '$lib/components/ProjectLink.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import { cpp_code } from './data.js';
</script>

<HomeButton color_for_button="text-gruv-yellow-dim"></HomeButton>
<div class="m-auto h-full w-[1000px] items-center justify-center pb-4">
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
		and subset was that of no repeating elements, so I was left high and dry. Oh well! I started to
		think on how to solve it when elements could repeat, but the internally linked hashmap no longer
		worked, as every value would need link to the correct bounds, and my function was useless. With
		my old assumptions invalid I came up with another set of ground rules: in a chain, the order of
		repeating elements matters, but the order of the array does not. So I came up with a 3 loop
		approach. First, populate the hashmap with repeats, this helps solves the bounds issue later on
		as you won't have interior accesses to the chain. Then connect elements together in the chain
		(while calculating subsets at the same time by storing extra information). Lastly, calculate
		total like before. This solution actually works.
		<br />
	</p>
</div>
