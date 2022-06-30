import React, { useEffect } from 'react';

const QuestionSidebar = (props) => {

    useEffect(() => {
        const questionDiv = document.getElementById('questionDiv');
        questionDiv.style.height = `calc(100vh - 80px)`;
    }, [])


    return (
        <div className="col-md-5">
            <div
                className="my-2 ms-4 me-0"
                id='questionDiv'
                style={{ overflowY: 'auto' }}
                dangerouslySetInnerHTML={{ __html: props.htmlToRender }}>
            </div>
        </div>
    )
}

export default QuestionSidebar;