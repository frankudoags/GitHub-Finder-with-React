import {useContext } from "react"
import AlertContext from "../../context/alert/AlertContext";
import {BiErrorCircle} from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'
const Alert = () => {
  //Global state from Alert Context
    const {alert} = useContext(AlertContext);

  if (alert !== null && alert.type === 'error') return (
    <>
    <div className="text-red-600 dark:text-red-900 flex gap-6 items-center bg-slate-200 dark:bg-slate-400 w-fit  pl-3 rounded-sm absolute top-16 right-4 after:content-[''] after:w-1 after:h-12 after:bg-red-600">
      <BiErrorCircle size={20} className="text-red-600 dark:text-red-900"/>
      {alert.msg}</div>
      </>
  )

  if (alert !== null && alert.type === 'success') return (
    <>
    <div className="text-green-600 dark:text-green-900 flex gap-6 items-center bg-slate-200 dark:bg-slate-400 w-fit  pl-3 rounded-sm absolute top-16 right-4 after:content-[''] after:w-1 after:h-12 after:bg-green-600">
      <TiTick size={20} className="text-green-600 dark:text-green-900"/>
      {alert.msg}</div>
      </>
  )
  }

export default Alert  