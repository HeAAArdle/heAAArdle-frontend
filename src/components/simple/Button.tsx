type ButtonType = "primary" | "secondary" | "destructive" | "cancel" | "skip";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    type: ButtonType;
    htmlType?: "button" | "submit";
    full?: boolean;
    isDisabled?: boolean;
};

const Button = ({
    text,
    onClick,
    type,
    htmlType = "button",
    full = false,
    isDisabled = false,
}: ButtonProps) => {
    const typeClasses: Record<ButtonType, string> = {
        primary: "py-3 text-neutral-950 bg-primary-300 hover:bg-primary-500",
        secondary: "py-1.5 text-neutral-50 bg-accent-800 hover:bg-accent-950",
        destructive: "py-3 text-neutral-50 bg-fail-500 hover:bg-fail-700",
        cancel: "py-3 text-neutral-50 bg-neutral-950 border-2 border-neutral-500 hover:bg-neutral-800",
        skip: "px-6 py-1.5 text-neutral-50 rounded-xl bg-gradient-to-br from-[#d62cea] to-[#aa21ba] hover:from-[#aa21ba] hover:to-[#d62cea]",
    };

    return (
        <button
            type={htmlType}
            onClick={onClick}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            className={`rounded-[64px] px-6 flex-col justify-center items-center text-xl lato-bold cursor-pointer transition-standard disabled:opacity-60 disabled:cursor-not-allowed ${typeClasses[type]} ${full ? "w-full" : ""}`}
        >
            {text}
        </button>
    );
};

export default Button;
