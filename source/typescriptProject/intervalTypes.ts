interface IInterval
{
    leftBound: number | "-inf";
    rightBound: number | "inf";
    leftContain: boolean;
    rightContain: boolean;
    isWithin(num : number) : boolean;
    getLength() : number;
}

interface IBoundedInterval extends IInterval
{
    leftBound: number;
    rightBound: number;
    getRandomWithin() : number;
}

interface IUnboundedInterval extends IInterval
{

}

export {IInterval, IBoundedInterval, IUnboundedInterval}