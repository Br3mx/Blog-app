import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFoundCategory = () => {
    return (
        <section>
            <h1>There is no post with this category</h1>
            <Link to='/categories'>
                <Button>Back to categories</Button>
            </Link>
        </section>
    )
}
export default NotFoundCategory;