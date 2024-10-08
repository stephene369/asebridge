import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useSignOutAccount } from '../../lib/react-query/queriesAndMutations';
import { useUserContext } from '../../context/AuthContext';

const Topbar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    console.log(
        "Je suis user" ,user
    )

    //console.log(user)
    useEffect(() => {
        if (isSuccess) {
            navigate(0)
        }
    }, [isSuccess])

    return (
        <section className="topbar">
            <div className="flex-between py-4 px-5 bg">
                <Link to='/asebridge/' className="flex gap-3 items-center">
                    <img src="/asebridge/assets/images/ase.png" alt="logo"
                        width={130}
                        height={325}
                    />
                </Link>

                <div className="flex gap-4">
                    <Button variant='ghost' className='shad-button_ghost'
                        onClick={() => signOut()}>
                        <img src="/asebridge/assets/icons/logout.svg" alt="logout" />
                    </Button>

                    <Link to={`/asebridge/profile/${user.id}`} className='flex-center gap-3' >
                        <img className='h-8 w-8 rounded-full'
                            src={user.imageUrl || '/asebridge/assets/icons/profile-placeholder.svg'} alt="profile" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Topbar;