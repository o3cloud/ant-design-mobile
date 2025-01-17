import * as React from 'react';
import CustomKeyboard from './CustomKeyboard';
import { InputEventHandler, InputKey } from './PropsType';
export interface NumberInputProps {
    placeholder?: string;
    disabled?: boolean;
    editable?: boolean;
    moneyKeyboardAlign?: 'left' | 'right' | string;
    moneyKeyboardWrapProps?: object;
    moneyKeyboardHeader?: React.ReactNode;
    value?: string;
    prefixCls?: string;
    keyboardPrefixCls?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: InputEventHandler;
    onBlur?: InputEventHandler;
    onVirtualKeyboardConfirm?: InputEventHandler;
    confirmLabel: any;
    backspaceLabel: any;
    cancelKeyboardLabel: any;
    maxLength?: number;
    type?: string;
    style?: React.CSSProperties;
    autoAdjustHeight?: boolean;
    disabledKeys?: Array<InputKey> | null;
}
declare class NumberInput extends React.Component<NumberInputProps, any> {
    static defaultProps: {
        onChange: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onVirtualKeyboardConfirm: () => void;
        placeholder: string;
        disabled: boolean;
        editable: boolean;
        prefixCls: string;
        keyboardPrefixCls: string;
        autoAdjustHeight: boolean;
    };
    container: HTMLDivElement;
    inputRef: HTMLDivElement | null;
    keyBoard: React.ReactNode | null;
    constructor(props: NumberInputProps);
    onChange: (value: any) => void;
    onConfirm: (value: any) => void;
    componentWillReceiveProps(nextProps: NumberInputProps): void;
    addBlurListener: () => void;
    removeBlurListener: () => void;
    componentWillUnmount(): void;
    saveRef: (el: CustomKeyboard | null) => void;
    getComponent(): JSX.Element;
    getContainer(): HTMLDivElement;
    renderCustomKeyboard(): void;
    doBlur: (ev: MouseEvent) => void;
    unLinkInput: () => void;
    onInputBlur: (value: string) => void;
    onInputFocus: () => void;
    onKeyboardClick: (KeyboardItemValue: string) => void;
    onFakeInputClick: () => void;
    focus: () => void;
    renderPortal(): {} | null | undefined;
    render(): JSX.Element;
}
export default NumberInput;
