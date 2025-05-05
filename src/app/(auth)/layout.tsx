"use client"

import './styles.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
  { name: "register", href: '/register' },
  { name: "login", href: '/login' },
  { name: "forgot password", href: '/forgot-password' },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  return (
    <html lang="en">

    <body

    >

    <div className="flex gap-2">
    {navLinks.map((link) => {

      const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== '/');
      return (

       
        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={link.name} href={link.href}>
          {link.name}
        </Link>
      )
    })}
    </div>
      <h1>Mi titulo</h1>
      {children}
    </body>
    <footer>
      <div className="flex">
        <p>footer</p>
        <p>footer</p>
      </div>
    </footer>
  </html>
  )
}
