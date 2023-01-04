import { useEffect, useState } from "react"

//-------------------
// 1. callback is always be called after component mounted
//  and callback is called everytime component re-render
//  call callback after component added element to DOM
function Content() {
    const [avatar, setAvatar] = useState()

    useEffect(()=> {
        //clean up
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        // console.log(URL.createObjectURL(file))
        setAvatar(file)
        
    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>

    )
}

export default Content