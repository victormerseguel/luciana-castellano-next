
const headSelect = document.querySelector("body");

function FacebookPixel(){
   return`
    <script>
        fbq("track", "CompleteRegistration");
    </script>
    `
}

function ConfirmacaoPixel(){
    return (
        headSelect.insertAdjacentHTML("afterbegin", FacebookPixel())
    )
}

export default ConfirmacaoPixel;