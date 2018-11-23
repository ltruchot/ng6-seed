/**
 * Provider : lfortin
 * creation date : 14/08/2018
 * last contributor : -
 * last update : -
 */

// ng
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileUploaderService {
  constructor() {}

  /**
   *
   */
  init() {}

  /**
   * return authorised file extension
   */
  public getAuthorisedExtensions() {
    return ['.png', '.jpg', '.jpeg'];
  }

  /**
   * return all the known and main headers per extension
   */
  getExtensionsHeaders() {
    return {
      '.avi': ['52494646'],
      '.bin': ['53503031'],
      '.doc': ['D0CF11E0'],
      '.docx': ['504B34', '504B56', '504B78'], // To be checked
      '.exe': ['4D5A'],
      '.gif': ['47494638'],
      '.ico': ['00000100'],
      '.iso': ['43443030'],
      '.jpeg': ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3', 'ffd8ffe8'],
      '.jpg': ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3', 'ffd8ffe8'],
      '.json': ['7ba922'],
      '.mkv': ['1A45DFA3'],
      '.mp3': ['494433', 'fffb'],
      '.odt': ['504B34', '504B56', '504B78'], // To be checked
      '.pdf': ['25504446'],
      '.png': ['89504e47'],
      '.ppt': ['D0CF11E0'],
      '.pptx': ['504B34', '504B56', '504B78'], // To be checked
      '.rar': ['52617221'],
      '.rtf': ['7B5C7274'],
      '.tar': ['75737461'],
      '.tif': ['49492A00', '4D4D002A'],
      '.txt': ['22616273'],
      '.xls': ['D0CF11E0'],
      '.xlsx': ['504B34', '504B56', '504B78'], // To be checked
      '.zip': ['504B34', '504B56', '504B78'], // To be checked
    };
  }

  /**
   * return the 8 first characters of the header of read as array buffer file
   */
  getHeader(element) {
    const arr = new Uint8Array(element.target.result).subarray(0, 4);
    let header = '';
    arr.forEach((el) => {
      header += el.toString(16);
    });
    return header;
  }

  /**
   * return list of the authorised headers according to the list of authorised extensions
   */
  getAllAuthorisedHeaders() {
    const authorisedExtensions = this.getAuthorisedExtensions();
    const allHeaders = this.getExtensionsHeaders();
    let authorisedHeaders = [];
    authorisedExtensions.forEach((ext) => {
      authorisedHeaders = authorisedHeaders.concat(allHeaders[ext] || []);
    });
    return authorisedHeaders;
  }

  /**
   * return promise:
   *  - true if the file is verified (header and extension)
   *  - false otherwise
   */
  validFile(file): Promise<boolean> {
    return new Promise((success, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onloadend = (e) => {
        const header = this.getHeader(e);
        const allAuthorisedHeaders = this.getAllAuthorisedHeaders();
        const headerChecked = allAuthorisedHeaders.indexOf(header) > -1;

        const extChecked = this.validExtension(file);

        if (headerChecked && extChecked) {
          success(true);
        } else {
          reject(false);
        }
      };
    });
  }

  /**
   * return boolean:
   *  - true if the file extension is in the list of authorised extensions
   *  - false otherwise
   */
  validExtension(file) {
    const fileExt = '.' + file.type.split('/')[file.type.split('/').length - 1];
    return this.getAuthorisedExtensions().indexOf(fileExt) > -1;
  }

  /**
   * return a promise:
   *  the base64 encoded file
   */
  getBase64(file) {
    return new Promise((success) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const avatar = fileReader.result.toString().split(',')[1];
        return success(`data:image/png;base64,` + avatar);
      };
    });
  }

  /**
   *  - Check if the file has a valide type
   *  - convert it into base 64
   */
  uploadFile(upload: any) {
    if (upload.target.files && upload.target.files.length > 0) {
      const file = upload.target.files[0];
      this.validFile(file)
        .then(() => {
          // The extension is valid
          this.getBase64(file).then((base64: string) => {
            alert('base64 result : ' + base64.substr(0, 100));
            // base64 is the base64 string of the file
            // Call save
          });
        })
        .catch((e) => {
          // The extension is not valid
          // Display error
          console.error(e);
        });
    }
  }
}
