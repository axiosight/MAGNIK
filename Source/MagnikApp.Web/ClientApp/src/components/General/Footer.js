import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer class="bg-dark text-white-50 mt-4">
                <div class="footer-copyright text-center py-3">© 2019 Copyright: Nikita Vashkov</div>
            </footer>
        );
    }
}