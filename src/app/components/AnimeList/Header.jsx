import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
        <h1 className="text-2xl font-bold items-center text-color-primary">{title}</h1>
        {linkHref && linkTitle 
        ?
        <Link href={linkHref} className="md:text-xl text-sm underline text-color-primary hover:text-color-blue">{linkTitle}</Link>
        :null
    }

        
        </div>
    )
}

export default Header