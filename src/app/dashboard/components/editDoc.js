import React from "react";

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        console.log(" ::: dalled constructor constructor")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("dalled did getSnapshotBeforeUpdate")

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("dalled did update")
    }

    render() {
        console.log("dalled did render")

        return (
            <div ref={this.listRef}>{/* ...contents... */}</div>
        );
    }
}