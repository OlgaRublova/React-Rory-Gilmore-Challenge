import React from 'react';
import Star from "./Star";
const WriteReview = () => {
    return (
        <section>
            <div className="write-review-rating">
                <Star/>
            </div>
            <div className="write-review-form-container">
                <label htmlFor="write-review-form-container__title" >Review Title</label>
                <input type="text" name="" id="write-review-form-container__title" placeholder="Review Title"/>

                <label htmlFor="write-review-form-container__review" >Book Review</label>
                <input type="text" name="" id="write-review-form-container__review" placeholder="Book Review"/>

                <label htmlFor="write-review-form-container__photos" >Add Photos (optional)</label>
                <div>
                    <div>photos</div>
                    <h5>Images must be less than 10MB & a jpg, png, gif or tif.</h5>
                </div>
                <label htmlFor="write-review-form-container__video" >Add Video (optional)</label>
                <div>
                    <input type="text" name="" id="write-review-form-container__video" placeholder="http://"/>
                    <h5>YouTube video links only. Your video must be public.</h5>
                </div>
                <input type="checkbox" name="" id="checkbox"/>
                <label htmlFor="checkbox">I agree with the Terms and Privacy Policy</label>

                <button>Submit Review</button>


            </div>
        </section>
    );
};

export default WriteReview;