import React from 'react';
import './index.css';

class CustomModal extends React.Component {
    render() {
        return (
            <>
                {this.props.open && <div className="Backdrop" onClick={this.props.onClose}></div>}
                <div className={this.props.open ? 'RootModal' : 'hideModal'}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default CustomModal