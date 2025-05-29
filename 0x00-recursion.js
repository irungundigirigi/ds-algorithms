#!/usr/bin/node

function counter(count) {
    
    if(count > 1) {
        counter(count -1)
    }
    console.log(count)
}

counter(10)