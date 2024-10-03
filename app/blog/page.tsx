"use client";

import SubstackFeed from './substackWidget';

export default function Blog() {

    return (
        <div className="flex-row h-full">
            <div className="h-36"></div>
            <div className="flex-row h-38 justify-center">
                <h1>Discover the world of reptiles</h1>
                <SubstackFeed/>
            </div>
        </div>
    )
}