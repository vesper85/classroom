import React, { useRef, useEffect } from 'react'


const AddClass = (props)=> {

    useEffect(() => {
        ref.current.click()
    }, [props.toggleJoin])

    const ref = useRef(null)
    return (
        <>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-secondary" id="exampleModalLabel ">Join class</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row justify-content-center ">

                <div className="h-50 card col-sm-6 m-3 px-4 py-5" >
                <div className="card-body ">
                    <h5 className="card-title my-2">Class code</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Ask your teacher for the class code, then enter it here.</h6>
                        {/* Class code input */}
                        <div className="form-floating my-1">
                            <textarea className="form-control" placeholder="Class code" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Class code</label>
                        </div>                  
                </div>
                </div>



                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" disabled>Join</button>
                </div>
                </div>
            </div>
            </div>

        </>
    );
};

export default AddClass
