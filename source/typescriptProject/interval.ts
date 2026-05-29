interface Interval
{
    leftBound: number | "-inf";
    rightBound: number | "inf";
    leftContain: boolean;
    rightContain: boolean;
    isWithin(num : number) : boolean;
    getLength() : number;
}

interface BoundedInterval extends Interval
{
    leftBound: number;
    rightBound: number;
    getRandomWithin() : number;
}

interface UnboundedInterval extends Interval
{

}

export {Interval, BoundedInterval, UnboundedInterval}