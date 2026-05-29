interface Interval
{
    leftBound: number | "inf" | "-inf",
    rightBound: number | "inf" | "-inf",
    leftContain: boolean,
    rightContain: boolean
}