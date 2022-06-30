module.exports = {
  reactStrictMode: true,

  env:{
    DB_LOCAL_URI: 'mongodb://localhost:27017/project',

    STRIPE_API_KEY: 'pk_test_51JbOSgFKlacKDMfNymFP9v2HycRiI1hxLnNusVe0Gj5OmsEoNuZpid7hQKwCjYBrlb5CxJhOVPcfpE61TsI8bqo300ARPB658Y',
    STRIPE_SECRET_KEY: 'sk_test_51JbOSgFKlacKDMfNvznQw686RrjufurnCUksvJVesWGEjVr4sImCq6O8dQnLXolAwi5zWUcTuQuwnxatADaVWX7H00NzGIDuPO',

    CLOUDINARY_CLOUD_NAME: 'dgb7sdwh6',
    CLOUDINARY_API_KEY: '634432521672194',
    CLOUDINARY_API_SECRET: 'vjXw_DCBETy0anG-YuWlbNIBd0k',


    STRIPE_WEBHOOK_SECRET: 'whsec_5SEoOinVpLN7vZEtpl0ErSCngWaEEYlW',

       SMTP_HOST: 'smtp.mailtrap.io',
       SMTP_PORT: '2525',
       SMTP_USER: '514c4e4eb995cd',
       SMTP_PASSWORD: 'd19a277d14ae27',
       SMTP_FROM_EMAIL: "BookIT",
       SMTP_FROM_NAME: "noreplay@bookit.com",
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
