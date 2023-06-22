import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  uploadFile(file: File) {
    // Effectuez ici votre logique d'envoi du fichier
    // Par exemple, redirigez vers une autre page en passant le fichier dans l'URL
    // window.location.href = 'autre-page?file=' + encodeURIComponent(file.name);

    // Ou utilisez une méthode de votre API pour envoyer le fichier au serveur
    // Exemple avec HttpClient :
    // return this.httpClient.post('chemin/vers/votre/api/upload', file);
  }
}