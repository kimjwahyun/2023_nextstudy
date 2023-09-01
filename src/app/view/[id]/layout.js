export default function Layout(props) {
    return(
        <>
            {/* page.js 내용 없이 */}
            {/* <h1>상세 페이지 : {props.params.id}</h1> */}

            {/* page.js 내용 있으면 children */}
            <div style={{width:"80%", margin:"auto", padding:"20px"}}>상세페이지</div>
            {props.children}
        </>
    );
}