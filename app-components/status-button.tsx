type StatusButtonProps = {
    status: string;
}

const StatusButton = ({ status } : StatusButtonProps) => {
    return (
        <div
            className={`border rounded-lg ${status === "Completed" ? `bg-blue-100 border-blue-500` : `bg-green-100 border-green-500`} inner-shadow flex items-center gap-2 px-4 py-1`}
        >
            {status === "Working" && (
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
            )}
            <p className="text-sm text-black">{status}</p>
        </div>
    )
}

export default StatusButton;