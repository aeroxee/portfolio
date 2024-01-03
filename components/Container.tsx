type ContainerProps = {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto">{children}</div>
}

export default Container
