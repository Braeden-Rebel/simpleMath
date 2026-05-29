interface IInterval
{
    isWithin(x : number) : boolean;
}

class BoundedInterval implements IInterval
{
    constructor(leftBound : number, leftIncluded : boolean, rightBound : number, rightIncluded : boolean)
    {
        if (!isFinite(leftBound))
        {
            throw new TypeError("A bounded interval cannot accept infinity as a left bound");
        }
        else if (!isFinite(rightBound))
        {
            throw new TypeError("A bounded interval cannot accept infinity as a right bound");
        }
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
        if (!isFinite(x))
        {
            return false;
        }
        else if (x == this.leftBound)
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

class UnboundedInterval implements IInterval
{
    constructor(leftBound : number, leftIncluded : boolean, rightBound : number, rightIncluded : boolean)
    {
        if (leftBound == Infinity)
        {
            
        }
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
        if (!isFinite(x))
        {
            return false;
        }
        else if (x == this.leftBound)
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

type Interval = BoundedInterval | UnboundedInterval

export {}