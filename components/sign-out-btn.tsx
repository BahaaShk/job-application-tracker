"use client"

import { signOut } from "@/lib/auth/auth-client"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"


export default function SignOutBtn() {
  const router = useRouter()
  return(
         <DropdownMenuItem className={"cursor-pointer  hover:text-gray-500"} onClick={async () => {
         const result =  await signOut();
          if(result.data){
            router.push('/sign-in')
          } else {
            alert("error logging out")
          }
        }}>Sign out</DropdownMenuItem>
  )
}