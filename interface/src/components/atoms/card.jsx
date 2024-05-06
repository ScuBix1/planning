export const headerLarge = ({ children }) => {
  return <div className='bg-[#e6c2bf] px-[20px] py-[10px] text-center rounded-lg font-normal flex items-center justify-center'>{children}</div>
};
export const employeeLarge = ({ color, children })=>{
  return <div className={`px-[20px] py-[10px] text-center rounded-lg font-normal flex items-center justify-center ${color?`bg-[${color}]`:``}`}>{children}</div>
} 
export const restLarge = ({children})=>{
  return <div className={`bg-[#b72614] px-[20px] py-[10px] text-center rounded-lg font-normal flex items-center justify-center`}>{children}</div>
}
