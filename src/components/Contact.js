const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 m-2 rounded-lg w-1/2" />
                <input type="email" placeholder="Email" className="border-2 border-gray-300 p-2 m-2 rounded-lg w-1/2" />
                <textarea placeholder="Message" className="border-2 border-gray-300 p-2 m-2 rounded-lg w-1/2 h-32"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;