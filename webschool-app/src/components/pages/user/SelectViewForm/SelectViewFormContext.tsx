type SelectViewFormContextProps = {
    title: string,
    text: string
}

export default function SelectViewFormContext({ title, text }: SelectViewFormContextProps) {
    return (
        <div>
            <span className="font-semibold text-base">{title}</span>
            <p className="text-sm text-webschool-100 flex flex-col">
                <span className="font-medium text-sm">{text.split(":")[0]}:</span>
                <span >{text.split(":")[1]}</span>
            </p>
        </div>
    )
}