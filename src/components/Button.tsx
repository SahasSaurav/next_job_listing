interface ButtonProps {
  name: string
}

const Button: React.FC<ButtonProps> = ({name}) => {
  return (
    <button className="p-2 mt-3 mr-3  tracking-wide text-desaturated-cyan font-sans font-semibold bg-cyan-background rounded-md shadow transition-colors duration-300 hover:bg-desaturated-cyan hover:text-cyan-background focus:outline-none focus:ring-4 focus:ring-indigo-300">
      {name}
    </button>
  )
}

export default Button;



