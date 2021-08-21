import React, { Component } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface Props {
  value: string;
  onChange: (content: string) => void;
  label?: string;
  error?: string;
  placeholder?: string;
}
interface State {
  quill: typeof QuillEditor;
}

const MODULES = {
  toolbar: [
    //[{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "link"],
    //[{ list: 'ordered' }, { list: 'bullet' }],
    ["clean"],
  ],
};

export default class InputWysiwig extends Component<Props, state> {
  state = {
    quill: null,
  };
  componentDidMount() {
    if (document) {
      this.setState({
        quill: require("react-quill"),
      });
    }
  }

  render() {
    const { label, onChange, value, error, placeholder } = this.props;
    if (!this.state.quill) {
      return null;
    }
    const Quill = this.state.quill;
    return (
      <label className="block flex-1 pb-4">
        {label && <span className="block text-gray-700 pb-3">{label}</span>}
        <Quill
          onChange={onChange}
          theme="snow"
          value={value}
          placeholder={placeholder}
          modules={MODULES}
        />
        {error && (
          <span className="block text-danger text-xs pt-2 text-right">
            {error}
          </span>
        )}
      </label>
    );
  }
}
