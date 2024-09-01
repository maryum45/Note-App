import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';

const TagInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const addTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addTag();
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <div>
            {tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap mt-3">
                    {tags.map((tag, index) => (
                        <span key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded">
                            #{tag}
                            <button onClick={() => removeTag(index)} className="ml-2">
                                <MdClose />
                            </button>
                        </span>
                    ))}
                </div>
            )}
            <div className="flex items-center gap-4 mt-3">
                <input
                    type="text"
                    className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
                    placeholder="Add tags"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
                    onClick={addTag}
                >
                    <MdAdd className="text-2xl text-blue-700 hover:text-white" />
                </button>
            </div>
        </div>
    );
};

export default TagInput;
