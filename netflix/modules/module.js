class CoverList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            covers: null
        }
        this.fetch = this.fetch.bind(this);

    }
    componentDidMount(){
        this.fetch();
    }
    
    fetch(){
        fetch(`backend/showinfo.php?covers`)
        .then((res) => res.json())
        .then((json) => {
                this.setState((state) => ({
                    covers: json
                }))
        })
        .catch((e) => {
            console.log(`Error fetching ${e}`)
        })
    }
    render(){
        if(this.state.covers){
            const listItems = this.state.covers.map((coverItem) => <li key={coverItem.id}><Cover cover={coverItem}/></li>)
            return (
            <ul className="covers">
                {listItems}
            </ul>
            )
        }
    };   
}


class Cover extends React.Component {
    /*
    props: [
        {
            id:         int
            name:       string,
            art:      string,
            original:   bool,
            year:       int
        }...
    ]
    
    state: {
        opened:     bool
    }
    */

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleHideInfo = this.handleHideInfo.bind(this);

    }
    
    handleShowInfo() {
        this.setState(state => ({
            opened: true
        }));
    }
    handleHideInfo() {
        this.setState(state => ({
            opened: false
        }));
    }   

   

    render(){
        return (
            <div onMouseEnter={this.handleShowInfo} onMouseLeave={this.handleHideInfo}>
                {this.props.original && <span className="original"></span>}
                <img src={this.props.cover.art} className="boxArt"></img>
                {this.state.opened && 
                    //<div className="boxInfo">{this.props.cover.name} ({this.props.cover.year})</div>
                    <BoxInfo id={this.props.cover.id}/>
                }
            </div>
        );
    }
}


class BoxInfo extends React.Component{
    /*
        {
            id: 1,
            show:   {
                year:           2020,
                name:           "Better Call Saul".
                rating:         16,
                totalSeasons:   5,
                genre:          ["Series TV policiacas","Dramas TV","Series TV de EEUU"],
                casting:        ["Bob Odenkirk, Jpnathan Banks, Rhea Seehorn"],
                tags:           ["Peculiar", "Descarnada"],
                thumbs: {
                    logo:   "https://occ-0-6100-358.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZ3QWcIg_U8TBnXzKphTRSOGyN5GDyhB7P8R4K3DdqsR87ddVgohIWoXEN5UzIhgVhdllLTGuAZXcIjmRuVRDn9fTNYonWfU5kEAyurz1BI.png?r=da8",
                    static: "https://occ-0-6100-358.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZs1IAF9RHCoU38E-dhVLGLTwSdU41CQDK-wandZvXPtAkqRUAiRY0RSZDi5hdjSJ5SF9JFxncDsuHX4EgNoKV4Yd_XrSBzZd2nS.jpg?r=e6a",
                    dynamic:"",
                    cover:  "";
                }
            },
            episode: {
                episode:        6,
                season:         6,
                length:         42,
                episodeName:    "Cinco-O",
                summary:        "Mike necesita un favor y Jimmy se muestra dispuesto a llegar a límites insospechados por echarle un cable. Pero eso no basta para tranquilizar a Mike",
            },
            videoQuality: {
                hd: true,
                sd: false,
                4k: false
            },
            audioQuality: {
                atmos: false,
                dolby: true
            },
            userInfo: {
                rating:         null,
                follow:         false,
                ellapsed:       8,
                coincidence:    97
            }
        }
    */

    constructor(props){
        super(props);
        this.state = {
            data: null
        }
        this.fetch = this.fetch.bind(this);

    }

    componentDidMount(){
        this.fetch(this.props.id);
    }
    
    fetch(showID){
        fetch(`backend/showinfo.php?show=${showID}`)
        .then((res) => res.json())
        .then((json) => {
                this.setState((state) => ({
                    data: json
                }))
        })
        .catch((e) => {
            console.log(`Error fetching ${e}`)
        })
    }
    render(){
       if(this.state.data){
            return (
                <BoxInfo_nav userInfo = {this.state.data.userInfo} show = {this.state.data.show} episode = {this.state.data.episode}/>
            );
        }
    }
}
function BoxInfo_nav(props){
    //userInfoObj, showName
    const logo          = props?.show?.thumbs?.logo ?? null;
    const showName      = props?.show?.name ?? "";
    const length        = props?.episode?.length ?? 1;
    const rating        = props?.userInfo?.rating ?? null;
    const following     = props?.userInfo?.following ?? false;
    const ellapsed      = props?.userInfo?.ellapsed ?? 0;
    const coincidence   = props?.userInfo?.coincidence ?? 0;
    return(
        <div className="boxInfo_nav">
            {logo != null ? <img src={logo} alt="" className="boxInfo_logo"/> : <p>{showName}</p>}
            <TimeLine total={length} played={ellapsed}/>
        </div>
    )
}

function TimeLine(props){
    const total = props.total;
    const played = props.played;
    return(
        <label className="timeline">
            <progress max={total} value={played}> {(100*played)/total}% </progress> {played} de {total} min
        </label>
    )
}