import React, { useState } from "react";
import { addQuote } from "./quotesSlice";
import { useDispatch } from 'react-redux'
import { v4 as uuid } from "uuid";


function QuoteForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    content: '',
    author: ''
  });

  function handleChange(event) {
    // Handle Updating Component State
    let key = event.target.id
    let value = event.target.value
    setFormData({ ...formData, [key]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const quote = {
      author: formData.author,
      content: formData.content,
      id: uuid(),
      votes:0
    }
    dispatch(addQuote(quote))
    setFormData({ content: '', author: '' })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
