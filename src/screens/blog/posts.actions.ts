import {postsStore} from './posts.store';

export async function fetchPosts() {
  const response = await fetch('http://localhost:3000/posts').catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  const posts = await response.json().catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  postsStore.setPosts(posts);
}

export async function addPost(post) {
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  const postToAdd = await response.json().catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  postsStore.addPost(postToAdd);
}

export async function deletePost(id) {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  }).catch(error => {
    console.warn('error: ', error);
    throw error;
  });
  postsStore.deletePost(id);
}
