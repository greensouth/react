import { connect } from "react-redux";
import PostlistTable from "../components/postslist";
import { removePost } from "../reducers/posts_actions";
const mapStateToProps = (state) => {
    return {
        items: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => { dispatch(removePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostlistTable);
