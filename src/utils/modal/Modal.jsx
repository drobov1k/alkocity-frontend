import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ModalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: this.props.show }
    }

    setShow = (show) => {
        this.setState({ show })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.show !== nextProps.show)
            this.setState({
                show: nextProps.show
            })
        return true
    }

    render() {
        const { show } = this.state

        return (
            <>
                <Modal
                    show={show}
                    onHide={() => this.setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                        Подтверждение публикации точки
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Вы действительно хотите опубликовать заявку?
                </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.onConfirm(false)} variant="secondary">Отмена</Button>
                        <Button onClick={() => this.props.onConfirm(true)} variant="primary">Опубликовать точку</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalWindow