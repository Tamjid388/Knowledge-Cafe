import profile from '../../assets/images/profile.png'



export default function Header() {
  return (
    <div className='mx-auto w-11/12 border-b-2 flex justify-between items-center'>
        <h1 className='text-4xl'> Knowledge Cafe</h1>
    <img src={profile} alt="" />
    </div>
  )
}
