import mongoose, { Schema } from 'mongoose';
import config from '../../config';
import bcrypt from 'bcrypt';
import { IAdmin } from './admin.interface';

const AdminSchema: Schema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    }
  },
  { timestamps: true }
);

AdminSchema.pre('save', async function (next) {
   const user = this; 
 
   user.password = await bcrypt.hash(
    user.password,
     Number(config.bcrypt_salt_rounds),
   );
 
   next();
});

// set '' after saving password
AdminSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);
