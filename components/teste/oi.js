

class Modal extends React.Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalBackdrop = document.createElement('div');
        this.modalTarget.className = 'react-modal';
        this.modalBackdrop.className = 'react-modal__backdrop';
        document.body.appendChild(this.modalTarget);
        document.body.appendChild(this.modalBackdrop);
        this._render();

        setTimeout(() => {
            this.modalTarget.classList.add('react-modal--in');
            this.modalBackdrop.classList.add('react-modal__backdrop--in');
        }, 40)

    }

    componentWillUpdate() {
        this._render();
    }

    componentWillUnmount() {
        this.modalTarget.classList.remove('react-modal--in');
        this.modalBackdrop.classList.remove('react-modal__backdrop--in');
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(this.modalTarget);
            document.body.removeChild(this.modalTarget);
            document.body.removeChild(this.modalBackdrop);
        }, 500)
    }

    renderModalDialogue() {
        // you could have modal headers in here if desired
        // you could have some default actions like close / primary etc that take callbacks
        return (
            <div className="react-modal__dialogue">
                {this.props.children}
            </div>
        )
    }

    _render() {
        ReactDOM.render(
            this.renderModalDialogue(),
            this.modalTarget
        );
    }

    render() {
        return <noscript />;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false
        }
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
    }
    handleModalOpen() {
        this.setState({ modalActive: true });
    }
    handleModalClose() {
        this.setState({ modalActive: false });
    }
    render() {
        const { modalActive } = this.state;
        return (
            <div>
                <h1>React Modal Portal Version</h1>
                <p>React modals can be challenging. This is a simple modal that can be expanded upon. The hard part is over. Now it's all up to you.</p>
                <button
                    onClick={this.handleModalOpen}
                    className="btn btn-primary"
                >
                    Open Modal
                </button>
                {modalActive &&
                    <Modal>
                        <button
                            onClick={this.handleModalClose}
                            className="btn btn-sm btn-secondary btn-close"
                        >
                            x
                        </button>
                        <h2>A pretty cool modal using react</h2>
                        <p>React modals can be challenging. This is a simple modal that can be expanded upon. The hard part is over. Now it's all up to you.</p>
                    </Modal>
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))



