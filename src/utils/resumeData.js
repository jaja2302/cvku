
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NearMeIcon from '@material-ui/icons/NearMe';



export default{
    name: 'Jaja Valentino',
    title: 'Newbie Programmer',

    birthday: 'Februari 23 1997',
    email:'valentinojaja@gmail.com',
    alamat: 'Jln.Jendral sudirman Arut Selatan Kotawaringin Barat',
    phone:'+6285152467845',
    
    sosmed: {
        Facebook:{
            link: 'https://facebook.com/Lurfrudacris',
            text: 'Facebook',
            icon: <FacebookIcon/>,
        },

        Twitter:{
            link: 'https://twitter.com/jaja_valentino',
            text: 'Twit',
            icon: <TwitterIcon/>,
        },
        Github:{
            link: 'https://github.com/jaja2302',
            text: 'Twit',
            icon: <GitHubIcon/>,
        },
    },

    about: 
    'Nama saya adalah Jaja Valentino. Sekarang berumur -+23 tahun. Secara singkat tentang saya. Saya menyukai hal-hal baru dan menarik untuk di pelajari.Tidak mudah menyerah dalam mecoba sesuatu. Memiliki semangat yang tinggi untuk bisa belajar dari orang lain.Terbuka untuk saran dan ide dalam membentuk sebuah Project.Tidak terlalu membaur dalam masyarakat Social.Masih kurang dan banyak dalam segi pengetahuan.Suka mencari jalan pintas dalam memecahkan masalah agar tidak terbelit-belit',

    exp: [
        {
            title: 'Freelancer',
            date:'2019-Present',
            description: 'Membuat sebuat simple website untuk client dalam kurung waktu tertentu.',
             },
            
    ],

    pendidikan: [
        {
            title: 'SMPN 7 Arut Selatan',
            date:'2009-2012',
            description: 'Bersekolah di SMP Negeri 7 Arut Selatan. \n\n Terletak Di Provinsi Kalimatan Tengah, Pangkalan Bun.',
        },
        {
            title: 'SMKN 1 Arut Selatan',
            date:'2012-2015',
            description: 'Bersekolah di SMK Negeri 1 Arut Selatan.\n\n Terletak Di Provinsi Kalimatan Tengah, Pangkalan Bun,\n\n dengan mengambil jurusan Multimedia .',
        },
        {
            title: 'Kuliah',
            date:'2015-Present',
            description: 'Berkuliah di STMIK Akakom Yogjakarta.\n\n Terletak Di Provinsi Yogyakarta dengan jurusan Teknik Informatika.',
        },
    ],

    layanan: [
        {
            title:'Web Developer',
            description: 'Menerima Permintan untuk pembuatan sebuah website(Komersial/Kantor/Sekolah)',
            icon:<LanguageIcon/>,
        },

        {
            title:'ASAP',
            description: 'On 24H untuk melayani dan mengirim data yang diminta dalam kurun waktu yang singkat',
            icon:<AlarmOnIcon/>,
        },

        {
            title:'On Time',
            description: 'Tidak mensia-siakan waktu anda untuk menunggu Projec dalam waktu yang lama dan tepat waktu sesuai Jadwal',
            icon:<HourglassEmptyIcon/>,
        },

    ],

    skills:[
        {
            title: "WEB",
            description :[
                "ReactJS",
                "JavaScript",
                "Bootsrap",
                "Material UI",
                "Laravel",
            ],
        },

        {
            title: "DESIGN",
            description :[
                "AdobePhotoshop",
                "CorelDraw",
                "Vegas Pro",
            ],
        },

        {
            title: "OFFICE",
            description :[
                "Ms.Word",
                "Ms.Excel",
                "Ms.PowerPoint",
            ],
        },

    ],

    projects: [
         {
             tag: 'Movie',
             title: 'Netflix',
             image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp_jpTGQwxFw%2Fmaxresdefault.jpg&f=1&nofb=1',
             caption: 'Netflix Movies',
             description: 'Netflix Test Project menggunakan React js',
             links: [
                 {link:'https://moviejojok.web.app/', icon:<MovieIcon/>},
                ]
         },
         {
            tag: 'App',
            title: 'Tinder',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F3%2F3a%2FTinder_screenshot.png&f=1&nofb=1',
            caption: 'Tinder FrontEnd',
            description: 'Tinder FrontEnd Test Project menggunakan React js. Firebasenya kadaluarsa gk ada foto :v',
            links: [
                {link:'https://tinder-b41e8.web.app/', icon:<FavoriteIcon/>},
               ]
        },
        {
            tag: 'E-commerce',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F7IE6MUNse0VPLkse7ChOUGXcZfA%3D%2F0x0%3A2040x1360%2F1200x800%2Ffilters%3Afocal(857x517%3A1183x843)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F62330718%2Facastro_181114_1777_amazon_hq2_0006.1542230557.jpg&f=1&nofb=1',
            title: 'Amazon',
            caption: 'Amazon E-Commerce',
            description: 'Netflix Test Project menggunakan React js',
            links: [
                {link:'https://challenge-ccf30.web.app/', icon:<StorefrontIcon/>},
               ]
        },
        {
            tag: 'E-commerce',
            title: 'Coming(soon)',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_uFgDHVlqz8%2Fmaxresdefault.jpg&f=1&nofb=1',
            caption: 'Next E-Commerce Project',
            description: 'E-commerce Test Project menggunakan Laravel',
            links: [
                {link:'#', icon:<NearMeIcon/>},
               ]
        },
    ],
}

