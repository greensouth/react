import { connect } from "react-redux";
import { addPost } from "../reducers/posts_actions";
import PostEditor from "../components/posteditor";

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (date,title,content,authorId) => { dispatch(addPost(date,title,content,authorId))}
    }
}
export default connect(null, mapDispatchToProps)(PostEditor);
