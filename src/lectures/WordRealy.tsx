import React, { useCallback, useRef, useState } from 'react';

const WordRelay = () => {

    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
        e.preventDefault();
        const input = inputEl.current;
        if(word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            if(input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setWord(word);
            if(input) {
                input.focus();
            }
        }
    }, [value, word]);

    const onChangeInputValue = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={onChangeInputValue}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

export default WordRelay;