'use client';
import React from 'react';
import Image from 'next/image';
import { Share2 } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative w-full h-60">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-white/90 text-sm font-semibold text-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Image
            src="/images/blog/a.png"
            alt="Author"
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          {post.author}
          <span className="mx-2">•</span>
          {post.date}
          <span className="ml-auto flex items-center gap-1">
            <Share2 size={14} />
            <span>&lt;1K shares</span>
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium
          donec dictum. Vici consequat justo enim.
        </p>
        <a href="#" className="text-sm font-semibold text-black hover:underline">
          View Post
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
