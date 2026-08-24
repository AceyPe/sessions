export default function HeroHome({className, pClassName} : {className?: string, pClassName?: string} ) {
    return (
        <div className={`${className}`} >
        <p className={`font-bold text-2xl ${pClassName}`}>
          Welcome to this shop!
        </p>
        <img className="size-128" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F048%2F556%2F555%2Fnon_2x%2Fluxury-perfume-bottle-isolated-on-transparent-background-png.png&f=1&nofb=1&ipt=a5aa21f8c93488498c246ccfc248aaa252d36897fce1ceb58bb84c41b3ea4a03"></img>
      </div>
    )

}