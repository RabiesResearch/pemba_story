import * as imagemin from 'imagemin';
import * as imageminMozjpeg from 'imagemin-mozjpeg';
import * as imageminPngquant from 'imagemin-pngquant';

async function run(dir) {
  const input = [`dist/assets/${dir}/*.{jpg,png}`];
  const output = `${dir}`;
  await imagemin(input, output, {
    plugins: [
      imageminMozjpeg({
        quality: 80
      }),
      imageminPngquant()
    ]
  });
}

run('social').then(() => run('images'));
