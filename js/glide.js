new Glide('.glide',
    {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 20,
        breakpoints: {
            740: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }
).mount();