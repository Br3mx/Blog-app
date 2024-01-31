import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";




const PostForm = ({action, actionText, ...props}) => {
    const categories = useSelector(getAllCategories)

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [category, setCategories] = useState(props.category || '');
    const [author, setAuthor] = useState(props.author || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoriesError, setCategoriesError] = useState(false);
    
    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        setCategoriesError(!category)
        if(content && publishedDate && category) {
            action(({title, shortDescription, content, publishedDate, category, author}));
        }
    };

    return (
    <section>
        <Row>
            <Form onSubmit={validate(handleSubmit)}>
                <Col>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control 
                            {...register('title', {required: true, minLength: 3})}
                            type="text" placeholder="Enter title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)}
                            />
                            {errors.title && <small className="d-block form-text text-danger mt-2">This title is too small(min 3)</small>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control
                            {...register('author', {required: true, minLength: 3})}
                            type="text" 
                            value={author} 
                            onChange={e => setAuthor(e.target.value)}/>
                            {errors.title && <small className="d-block form-text text-danger mt-2">This field is to small (min 3)</small>}

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="publishedDate">
                        <Form.Label>Published:</Form.Label>
                        <div><ReactDatePicker selected={publishedDate} value={publishedDate} onChange={(date) => setPublishedDate(date)} className="form-control" placeholderText="Date" dateFormat='dd/MM/yyyy'/></div>
                        {dateError &&  <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="categories">
                        <Form.Label>Categories:</Form.Label>
                        <Form.Select aria-label="Default select example"
                            {...register('categories', {required: true})}
                            as="textarea" 
                            value={category} 
                            onChange={e => setCategories(e.target.value)}
                        >
                        
                        <option>Select category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                        </Form.Select>
                            {categoriesError && (<small className="d-block form-text text-danger mt-4">This field can't be empty</small>)}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shortDescription">
                        <Form.Label>Short description:</Form.Label>
                        <Form.Control
                            {...register('author', {required: true, minLength: 3})}
                            as="textarea" 
                            value={shortDescription} 
                            onChange={e => setShortDescription(e.target.value)}/>
                            {errors.title && <small className="d-block form-text text-danger mt-2">This description is too small (min 3)</small>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Main Content:</Form.Label>
                        <ReactQuill theme="snow" style={{ height: '150px' }} value={content} onChange={setContent}/>
                        {contentError &&  <small className="d-block form-text text-danger mt-5">Content can't be empty</small>}
                    </Form.Group>
                </Col>
                
                <Button type="submit" className="mx-1 mt-5">{actionText}</Button>
            </Form>
        </Row>
    </section>    
    )
};

export default PostForm;