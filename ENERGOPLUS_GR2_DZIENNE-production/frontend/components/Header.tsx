"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {Search} from "lucide-react";
import {ChangeEvent, ChangeEventHandler, useState} from "react";

export default function Header() {

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  console.log(searchValue);

  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex justify-start items-center">
        <Image
          src="/icon.png"
          alt="Logo EnergoPlus"
          width={45}
          height={30}/>
        <div className="font-bold
        text-xl tracking-tight"
        >Energo
          <span className="text-yellow-400">Plus</span></div>
      </div>
      <div className="flex items-center">
        <Input className="min-w-[500px]
         border border-yellow-400
         rounded-tr-none
         rounded-br-none"
        placeholder="szukaj ..."
               value={searchValue} onChange={handleSearch}
        />
        <div>

        </div>

        <Button className="bg-yellow-400
        text-black
        font-bold
        rounded-tl-none
        rounded-bl-none
        min-w-[100px]
        hover:bg-yellow-300">
          <Search className="h-4 w-4 mr-1"/>
          Szukaj</Button>
      </div>

      <Button
        className="
        bg-yellow-400
        text-black
        font-bold
        hover:bg-yellow-300
        ">Zaloguj</Button>
    </div>
  )
}