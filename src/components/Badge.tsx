
interface BadgeProps{
  name:string
}

const Badge:React.FC<BadgeProps> = ({name}) => {
  const badgeStyles={
      backgroundColor:name==="New!"?'hsl(180, 29%, 50%)':'hsl(180, 14%, 20%)',
      paddingTop:"1px",
      paddingBottom:"1px"
  }
  return (
    <div className="inline-flex font-sans justify-center items-baseline text-white text-sm uppercase tracking-wider font-medium rounded-full px-2" style={badgeStyles}  >
      {name}
    </div>
  )
}

export default Badge;