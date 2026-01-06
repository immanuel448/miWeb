
  const track = document.getElementById("techTrack");

  // Duplicamos una sola vez
  track.innerHTML += track.innerHTML;

  let position = 0;
  const speed = 0.4;

  function animate() {
    position -= speed;

    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
