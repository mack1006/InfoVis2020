class Vec3
{
	// Constructor
	constructor( x, y, z )
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	add(v)
	{
		this.x += v.x;
		this.y += v.y;
		thie.z += v.z;
		return this;
	}
	
	bubbleSort()
	{
		let sort = [this.x, this.y, this.z];
		let len = 3;
		let temp;
		let i,j;
		for(i=1; i<len; i++)
		{
			for(j=0; j<len-i; j++)
			{
				if(sort[j] >= sort[j+1]){
					temp = sort[j];
					sort[j] = sort[j+1];
					sort[j+1] = temp;
				}

			}
		}
		return sort
	}
	min()
	{
		return this.bubbleSort()[0];
	}
	mid()
	{
		return this.bubbleSort()[1];
	}
	max()
	{
		return this.bubbleSort()[2];
	}
}