module.exports = function getZerosCount(number, base) {
	let prime = [], primes = [];

	function prime_number()
	{
		for(let i = 0; i < 300; ++i) prime.push(1);
		prime[0] = prime[1] = 0;
		for(let i = 2; i <300; ++i)
			if(prime[i])
			{
				primes.push(i);
				for(let j = i*i; j < 300; j+=i)
					prime[j] = 0;
			}
	}
	function get_prime_divisors(a)
	{
		let mas = {};
		for(let i = 0; primes[i]<=a; ++i)
		{
			if(Math.floor(a)%Math.floor(primes[i])==0)
			{
				mas[Math.floor(primes[i])] = 0;
				while(Math.floor(a)%Math.floor(primes[i])==0)
				{
					a /= primes[i];
					mas[Math.floor(primes[i])] += 1;
				}
			}
		}
		return mas;
	}

	function get_Stepen_of_0(N, a)
	{
		let prime_divisors = get_prime_divisors(a);
		let mas_arr = [];
		for(let key in prime_divisors)
		{
			let step_of_key = prime_divisors[key];
			let p = 0;
			for(let i = key; i <= N; i*=key)
			{
				p += Math.floor(N/i);
			}
			mas_arr.push(Math.floor(p/step_of_key));
		}
		let min = Math.floor(100000000);
		for(let i = 0; i < mas_arr.length; ++i)
			min = Math.min(min, mas_arr[i]);
		return min;
	}
	prime_number();
	return get_Stepen_of_0(number, base);
}