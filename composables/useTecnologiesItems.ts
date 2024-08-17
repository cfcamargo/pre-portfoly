export function useTecnologiesIcons(){
    const tecnologies = ref([
        {
            name: 'VueJS',
            icon: 'https://www.svgrepo.com/show/354528/vue.svg'
        },
        {
            name: 'NuxtJs',
            icon: 'https://upload.vectorlogo.zone/logos/nuxtjs/images/546e1030-a547-4b23-beb1-018e4f093fa6.svg'
        }, 
        {
            name: 'Tailwind CSS',
            icon: 'https://www.svgrepo.com/show/374118/tailwind.svg'
        },
        {
            name: 'Typescript',
            icon: 'https://www.svgrepo.com/show/374146/typescript-official.svg'
        },
        { 
            name: 'Adonis JS',
            icon: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg'
        },
        { 
            name: 'NodeJS',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256'
        },
        { 
            name: 'JavaScript',
            icon: 'data:image/png;base64,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'
        },
        { 
            name: 'React JS',
            icon: 'https://www.svgrepo.com/show/452092/react.svg'
        },
        {
            name: 'C#',
            icon : 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'
        },
        { 
            name: '.Net',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEVRK9T///9JHNN5Y9xPKNTo5vhMI9M3ANDh2vhzWdvQyvHj3/ZiQthOJdP+/f/Y0vTKwfFYNdWypOv5+P2Fb99sTdptUdqbhudlRtlEEdKPe+GvnuvFufHy8PuJc+D29Px2Xtt9aN2kkem9sO6Xh+Ohk+VfO9ezqOoaLD6bAAAEFElEQVR4nO2ai5KyIBiG0RBLw7SjpebWtnb/d/hbgUe02t9mZeZ9ZnanwS/5HjAElBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3GCmhHeFUBHAqOprbW5hvOd4SWeVv4POJpKQdYRkImAWlC7bSSdfWR4QnroDCk7bQW0ocSyBuwzUp2Yn9xHhlHXbsdXJ9EgJPSfdAQXJ1RxWxjUk7lHdNeZ69QiYzooAe2F0kh44pVH38Qrxniqr/H8Zz98obZQyTneGyYG+LjOgS03GSM5E1VDvy7zRMx+TMRZbVddoKmPEmWIM+KjMp34zOdZOcaH1y3hN7jIkqh8wlOGf7RnDUVxovTLJ97JJNMvPe6qVXy0R7l5rxYeOW9swMl7U7ppeGTezW9yizFqJKUdyn9bLh3RpyRjWqdVY/TLKMaMBDwqZ+ZA/kgalTCKra3WNfjKpLzL2znYjRkOZs0wvpY30dJTZpaLCuNE1+skYZ+KLT96xbqOhTGSf5Ec3qCWopUwQiQvN+67NMjSUWdpsKzO0jtVphpYyhB3krMMJK/dmTWWCq0g7rc5q9JQh5peo1Juuyxz7ZTYm5Zzf/u7/80XmSGSIeRazGi8u92r6ZWYkaDAWGUZ8sfSwLkUTv7cEuO6CVr5/I0PMmRwDFkXm/YuzVQPPn7dWq38kQ+wfmeRStvCby+YRyVQuoIOpvYyZyawcMQZoLENsubHi/Tx2ynWW4UExq3kk/6aME45IhrC1XELHhD+TSRdOgygby9B8LwuWomy1M5/JWJN5WCdr1/KHMoTNZN3TOXs6NzNpDT6a6Yws3Ilbp3fbctR0ollUPo/lVZSvbDSXIWwyFcVOwHSXoeRHjmhLc6+5DGEbOX121/uT5jKEH+X02Q8musuwYCn2atLLJNVchpjFXs1C7nPoK0PMgxgDVr6rvQzn8maTJKOVYawyq+2RISyUw7M3Thm6t7NtYBcJ9MmQ/c6oMTIZTi5u3szWRm5Y9spQ038us9k/f1npIzL55F7cMk77F2TyW2fyTCaJdi0uYSPjz/RMsZmciKcW/TKEXbwnMkqaT8Q/IUODb1ndKrJfksmqF9q4ZOZlav5LMvn0v3KhjUxG3jnyVddrMpzIX9noZEjxek4qHic9kyFsW74mNyoZQr+Kk4qXR0uZq1qGsl1xobm/l5FrvSFlyPGehOfLBxaUxtPFnXPHC0Y8uD4CFtO48o6mLFThrhs3mnzkedQyXQ44NFM++4nj+ELKpttsH7R3u4pMZMimfPTC55tutu1HNKE4Eg6mcoPtOTGrD5M5e9DdYlSGVNubc1l6O8Dqn9vnUp1iCJQP6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Nf8AyR/a6H2Yu2cAAAAAElFTkSuQmCC'
        },
        {
            name: 'Ionic',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/free-ionic-3628853-3029993.png'
        },
        { 
            name: 'Postgress',
            icon: 'https://www.svgrepo.com/show/354200/postgresql.svg'
        },
        { 
            name: 'Docker',
            icon: 'https://www.svgrepo.com/show/448221/docker.svg'
        },
        {
            name: 'Cypress',
            icon: 'https://www.svgrepo.com/show/353630/cypress.svg'
        },
        {
            name: 'Vuetify',
            icon: 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg'
        },
        { 
            name: 'Quasar',
            icon: 'https://www.svgrepo.com/show/374024/quasar.svg'
        },
        {
            name: 'Pinia',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png'
        },
        {
            name: 'ChadCN',
            icon: 'data:image/jpeg;base64,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'
        },
        { 
            name: 'Figma',
            icon :'https://www.svgrepo.com/show/354987/figma.svg'
        }
    ])


    return {
        tecnologies
    }
}