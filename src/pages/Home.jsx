import { memo } from "react"
function Home({ todos, addtodos }) {
    console.log("child render");

    return (
        <>
            {
                todos.map((val) => {
                    return (
                        <p>{val}
                        </p>)
                })
            }
            <button onClick={addtodos}>Click</button>
        </>
    )
}

export default memo(Home)