/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="copyright">
          Retrouvez-moi sur les réseaux sociaux
          <button>
            Facebook
          </button>
        </div>
        <div className="copyright">
          {this.props.config.copyright}
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
