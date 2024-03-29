import { useSelector } from 'react-redux';
import styles from './Home.module.scss'
import { getAllPosts } from '../../../redux/postsRedux.js';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr.js';


const Home = (props) => {
    const posts = useSelector((state) => getAllPosts(state));

    return (
        <div>
            <Row className='mb-3'>
                <Col>
                    <h1 className='mb-3'>All Posts</h1>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Link key={props.id} to='/post/add' className='px-2'>
                        <Button variant='outline-info' className='px-4'>Add Post</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} md='4'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='mb-3'>{post.title}</Card.Title>
                                <Card.Text className='mb-1'><strong>Author:</strong>{post.author}</Card.Text>
                                <Card.Text className='mb-2'><strong>Published:</strong>{dateToStr(new Date(post.publishedDate))}</Card.Text>
                                <Card.Text className='mb-2'><strong>Category:</strong>{post.category}</Card.Text>
                                <Card.Text className='mb-3'>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button>Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Home;