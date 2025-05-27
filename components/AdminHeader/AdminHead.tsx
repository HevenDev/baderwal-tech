import Link from "next/link";

const AdminHead = () => {
    return (
        <>
            <header className="flex fixed w-full justify-center backdrop-blur-md z-50">
                <nav className="inline-flex justify-center gap-8 bg-blue-300 rounded-full px-7 py-3 my-2">
                    <Link href="/admin">Admin</Link>
                    <Link href="/admin/add-blog">Add Blog</Link>
                    <Link href="/admin/manage-blog">Manage Blog</Link>
                    
                </nav>
            </header>
            <div className="h-[64px]"></div>
        </>
    )
}

export default AdminHead;