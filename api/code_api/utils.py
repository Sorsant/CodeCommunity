import cloudinary
import cloudinary.uploader

def cargar_imagen(file):
    result = cloudinary.uploader.upload(
        file,
        folder="ImagePost"
    )
    return result

def cargar_profile_img(file):
    result = cloudinary.uploader.upload(
        file,
        folder="profileImage"
    )
    return result