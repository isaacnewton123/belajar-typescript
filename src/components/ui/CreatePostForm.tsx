import React, { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { FiImage, FiSmile, FiX } from 'react-icons/fi';
import { usePost } from '@/hooks/usePost';
import type { FormPost } from '@/services/types';
import { useAuthContext } from '@/contexts/auth/useAuthContext';
import { toast } from 'react-toastify';

import Picker from '@emoji-mart/react';
import data, { type Emoji } from '@emoji-mart/data';
import ImgButton from './imgButton';


const CreatePostForm: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)

  const { user } = useAuthContext()
  const { createPost } = usePost()


  const handleEmojiPicker = (emoji: Emoji) => {
    setContent(currentContent => currentContent + emoji.emoticons);
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const MAX_FILE_SIZE = 5 * 1024 * 1024;

      if (file.size > MAX_FILE_SIZE) {
        toast.error('To Large File Size')
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return

    const postData: FormPost = {
      content: content,
      image: image
    };

    createPost(postData)

    setContent('');
    handleRemoveImage();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-4">
          <ImgButton profile={{
            avatar: user?.avatar,
            fullName: user?.fullName
          }} />
          <div className="flex-1">
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Apa yang kamu pikirkan? (Wajib diisi)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {imagePreview && (
              <div className="mt-4 relative">
                <img src={imagePreview} alt="Show Gambar" className="rounded-lg w-full h-auto" />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75"
                  aria-label="Delete Image"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-1 text-gray-500">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="hover:text-blue-600 p-2 rounded-full"
                  aria-label="Add Image"
                >
                  <FiImage />
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="hover:text-blue-600 p-2 rounded-full"
                  aria-label="Add Emoji">
                  <FiSmile />
                </button>


                {showEmojiPicker && (
                  <div className="absolute z-10 bottom-full mb-2">
                    <Picker
                      data={data}
                      onEmojiSelect={handleEmojiPicker}
                      theme="light"
                    />
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={!content.trim()}
              >
                Posting
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;