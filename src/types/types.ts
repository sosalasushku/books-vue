export interface linkType {
  id: number,
  name: string,
  url: string,
  onClick?: Function,
}

export interface userType {
  name: string,
  surname: string,
  email: string,
  phone: string,
  password: string,
}

export interface bookType {
  etag: string,
  volumeInfo: {
    title: string,
    authors?: string[],
    imageLinks?: {
      thumbnail?: URL,
      smallThumbnail?: URL
    }
  }
}

export interface optionType {
  name: string,
  value: string
}