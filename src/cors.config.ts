import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const whitelist = ['http://localhost:4000', 'http://localhost:4001'];

const corsConfig = () => {
  return <CorsOptions>{
    origin: function (origin, callback) {
      if (origin == null) {
        callback(null, true);
        return;
      }
      console.log('heeeei', origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  };
};

export default corsConfig;
