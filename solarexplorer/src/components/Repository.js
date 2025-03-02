import React from 'react';
import { useParams } from 'react-router-dom';

function Repository() {
    const { address } = useParams();
    const [copied, setCopied] = React.useState(false);
    const [urlCopied, setUrlCopied] = React.useState(false);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCopyUrl = () => {
        const repoUrl = `https://solar.com/repository/${address}`;
        navigator.clipboard.writeText(repoUrl);
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    };

    return (
        <div className="repository-container">
            <div className="repository-header">
                <h1 className="centered">Repository Name</h1>
                <div className="repository-address-container">
                    <code>{address}</code>
                    <button
                        className="copy-button"
                        onClick={handleCopyAddress}
                        title={copied ? "Copied!" : "Copy address"}
                    >
                        {copied ? "✓" : "📋"}
                    </button>
                </div>
            </div>

            <div className="repository-content">
                <div className="section-container">
                    <h2 className="section-title">Members</h2>
                    <div className="member-list">
                        <div className="member owner">
                            <span className="member-type">Owner</span>
                            <span className="member-address">0x123...abc</span>
                        </div>
                        <div className="member">
                            <span className="member-type">Collaborator</span>
                            <span className="member-address">0x456...def</span>
                        </div>
                        <div className="member">
                            <span className="member-type">Collaborator</span>
                            <span className="member-address">0x789...ghi</span>
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Branches</h2>
                    <div className="branch-list">
                        <div className="branch main-branch">
                            <span className="branch-name">main</span>
                            <span className="branch-commit">Latest commit: 2d ago</span>
                        </div>
                        <div className="branch">
                            <span className="branch-name">development</span>
                            <span className="branch-commit">Latest commit: 5d ago</span>
                        </div>
                        <div className="branch">
                            <span className="branch-name">feature/new-update</span>
                            <span className="branch-commit">Latest commit: 1w ago</span>
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <h2 className="section-title">Clone Repo</h2>
                    <div className="repo-url-container">
                        <code>{`https://solar.com/repository/${address}`}</code>
                        <button
                            className="copy-button"
                            onClick={handleCopyUrl}
                            title={urlCopied ? "Copied!" : "Copy repository URL"}
                        >
                            {urlCopied ? "✓" : "📋"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Repository; 