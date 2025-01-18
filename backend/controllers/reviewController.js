import { Review } from '../model/Review.js';

// Create a new review
export const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all reviews
export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user product');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a review by ID
export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('user product');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a review
export const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a review
export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
