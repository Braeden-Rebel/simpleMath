interface IInterval
{
    isWithin(x : number) : boolean;
}

class BoundedInterval implements IInterval
{
    constructor(leftBound : number, leftIncluded : boolean, rightBound : number, rightIncluded : boolean)
    {
        this.leftBound = leftBound;
        this.leftIncluded = leftIncluded;
        this.rightBound = rightBound;
        this.rightIncluded = rightIncluded;
    }
    leftBound: number;
    leftIncluded: boolean;
    rightBound: number;
    rightIncluded: boolean;

    isWithin(x: number): boolean {
        if (x == this.leftBound)
        {
            return this.leftIncluded;
        }
        else if (x == this.rightBound)
        {
            return this.rightIncluded;
        }
        else
        {
            return this.leftBound < x && x < this.rightBound;
        }
    }
}

type Interval = BoundedInterval

export {}