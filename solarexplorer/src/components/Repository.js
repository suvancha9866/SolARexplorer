import React from 'react';
import { useParams } from 'react-router-dom';

function Repository() {
    const { address } = useParams();

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
    };

    return (
        <section className="repository-page">
            <div className="repository-sidebar">
                <h3>Owners & Collaborators</h3>
                <ul>
                    <li>0x123...abc (Owner)</li>
                    <li>0x456...def (Collaborator)</li>
                    <li>0x789...ghi (Collaborator)</li>
                </ul>
            </div>

            <div className="repository-main">
                <h2>Repository Name</h2>
                <div className="repository-address">
                    <span>{address}</span>
                    <button
                        className="copy-repo-address"
                        onClick={handleCopyAddress}
                        title="Copy address"
                    >
                        📋
                    </button>
                </div>
                <div className="branches">
                    <h3>Branches</h3>
                    <ul>
                        <li>main</li>
                        <li>development</li>
                        <li>feature/new-update</li>
                    </ul>
                </div>
            </div>

            <div className="repository-actions">
                <button className="download-btn">Download</button>
            </div>
        </section>
    );
}

export default Repository; 