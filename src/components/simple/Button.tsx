type ButtonVariant =
    | "primary"
    | "secondary"
    | "destructive"
    | "cancel"
    | "skip";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant: ButtonVariant;
    htmlType?: "button" | "submit";
    full?: boolean;
    isDisabled?: boolean;
};

const TYPE_CLASSES: Record<ButtonVariant, string> = {
    primary:
        "rounded-[64px] py-3 bg-primary-300 text-neutral-950 hover:bg-primary-500",
    secondary:
        "rounded-[64px] py-1.5 bg-accent-800 text-neutral-50 hover:bg-accent-950",
    destructive:
        "rounded-[64px] py-3 bg-fail-500 text-neutral-50 hover:bg-fail-700",
    cancel: 
        "rounded-[64px] py-3 border-2 border-neutral-500 bg-neutral-950 text-neutral-50 hover:bg-neutral-800",
    skip: 
        "rounded-xl py-1.5 bg-gradient-to-br from-accent-500 to-accent-600 text-neutral-50 hover:from-accent-600 hover:to-accent-500",
};

const Button = ({
    text,
    onClick,
    variant,
    htmlType = "button",
    full = false,
    isDisabled = false,
}: ButtonProps) => {
    return (
        <button
            type={htmlType}
            onClick={onClick}
            disabled={isDisabled}
            className={`flex justify-center items-center px-6 body-l-b transition-standard cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${TYPE_CLASSES[variant]} ${full === true ? "w-full" : ""}`}
        >
            {text}
        </button>
    );
};

export default Button;
