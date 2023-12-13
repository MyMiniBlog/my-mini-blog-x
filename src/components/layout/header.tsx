interface HeaderProps {
 text: string;
 additionalText?:string;
}

function Header(props: HeaderProps) {
   return (
       <div>
           <h1>{props.text}</h1>
           <h3>{props.additionalText}</h3>
       </div>
   )
}

export default Header;
