/*
useEffect cases
1. useEffect(callback)
2. useEffect(callback, [])
3. useEffect(callback, [deps])
*/

import { useEffect, useState } from "react"

//-------------------
// 1. callback is always be called after component mounted
//  and callback is called everytime component re-render
//  call callback after component added element to DOM
function Content() {
    const tabs = ['posts', 'comments', 'albums']
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    console.log(type)
    // 2.useEffect(callback,[])
    // useEffect(() => {
    //     // console.log('Re-render')
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             // console.log(posts)
    //             setPosts(posts)
    //         })
    // }, [])

    // 3.useEffect(callback,[deps])
    useEffect(() => {
        // console.log('Re-render')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                // console.log(posts)
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            setShowGoToTop(window.scrollY > 200)
        }

        //bind scroll event with handleScroll to window
        window.addEventListener('scroll', handleScroll)


    })

    return (
        <>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {/* <div> */}
            <input value={title}
                onChange={e => setTitle(e.target.value)} />
            {/* </div> */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >Go To Top</button>
            )}
        </>

    )
}

export default Content