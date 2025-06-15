import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private songs = ['ime pijesme'];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
