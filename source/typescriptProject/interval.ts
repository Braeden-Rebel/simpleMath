interface Interval
{
    leftBound: number | "inf" | "-inf",
    rightBound: number | "inf" | "-inf",
    leftContain: boolean,
    rightContain: boolean,
    getLength() : number
}

interface BoundedInterval extends Interval
{
    leftBound: number,
    rightBound: number,
    getRandomWithin() : number
}

interface UnboundedInterval extends Interval
{

}

export {Interval, BoundedInterval, UnboundedInterval}