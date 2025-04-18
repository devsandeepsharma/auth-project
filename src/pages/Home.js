const Home = () => {
    return (
        <div 
            style={{maxWidth: "300px"}} 
            className="
            d-flex 
            flex-column 
            justify-content-center 
            align-items-center 
            p-4 m-auto mt-4 rounded shadow
            "
        >
            <img 
                style={{width: "200px", height:"200px"}} 
                className="rounded-circle" 
                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" 
            />
            <h3 className="mt-1">Username</h3>
            <p>Email@gmail.com</p>
            <p className="
                bg-secondary
                text-white
                py-1
                px-3
                rounded
            "
            >
                Verifield
            </p>
        </div>
    )
}

export default Home;