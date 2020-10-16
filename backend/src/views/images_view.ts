import Image  from '../models/Image'

export default {
  render (image: Image) {
    return {
      id: image.id,
      // url: `http://localhost:3333/uploads/${image.path}` // endereço para emulador
      url: `http://192.168.1.107:3333/uploads/${image.path}`  // endereço para dispositivo na mesma rede
    }
  },

  renderMany (images: Image[]) {
    return images.map(image => this.render(image));
  }
}