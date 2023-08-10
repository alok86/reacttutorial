type RendomNumberType ={
    value : number
}
type PositiveNumber = RendomNumberType&{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumber = RendomNumberType&{
    isNegative:boolean
    isPositive?:never
    isZero?:never
}
type Zero = RendomNumberType&{
    isZero:boolean
    isPositive?:never
    isNegative?:never
}
type RendomNumberProps = PositiveNumber|NegativeNumber|Zero


  
export const RendomNumber = ({
    value ,
    isPositive,
    isNegative,
    isZero
}:RendomNumberProps) => {
  return (
    <>
    {value} 
    {isPositive && 'positive'} 
    {isNegative && 'negative'} 
    {isZero && 'Zero '}


    </>
  )
}
