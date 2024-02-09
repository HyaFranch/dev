document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById('languageSelector');
    const translationPt = document.getElementById('translationPt');
    const translationSiga = document.getElementById('translationSiga');
    const translationChat = document.getElementById('translationChat');
    const translationReceber = document.getElementById('translationReceber');
    const translationDigite = document.getElementById('translationDigite');
    const translationResetar = document.getElementById('translationResetar');
    const translationResetarDescricao = document.getElementById('translationResetarDescricao');
    const translationCliqueAqui = document.getElementById('translationCliqueAqui');
    const translationCliqueAquiTexto = document.getElementById('translationCliqueAquiTexto');

    languageSelector.addEventListener('change', () => {
        const selectedLanguage = languageSelector.value;

        if (selectedLanguage === 'pt') {
            translationPt.textContent = 'Resgatar chave Luxury Hub';
            translationSiga.textContent = 'Siga o tutorial do vídeo abaixo';
            translationChat.textContent = 'Clique aqui para ir ao chat de comandos';
            translationReceber.textContent = 'Receber o script';
            translationDigite.textContent = 'Digite /script no chat de comandos igual no tutorial acima';
            translationResetar.textContent = 'Resetar HWID';
            translationResetarDescricao.textContent = 'Digite /resethwid no chat de comandos igual no tutorial acima';
            translationCliqueAquiTexto.textContent = 'Discord Server (Clique aqui)';
        } else if (selectedLanguage === 'en') {
            translationPt.textContent = 'Redeem Luxury Hub key';
            translationSiga.textContent = 'Follow the video tutorial below';
            translationChat.textContent = 'Click here to go to the command chat';
            translationReceber.textContent = 'Receive the script';
            translationDigite.textContent = 'Type /script in the command chat as in the tutorial above';
            translationResetar.textContent = 'Reset HWID';
            translationResetarDescricao.textContent = 'Type /resethwid in the command chat as in the tutorial above';
            translationCliqueAquiTexto.textContent = 'Discord Server (Click here)';
        } else if (selectedLanguage === 'vi') {
            translationPt.textContent = 'Nhận key Luxury Hub';
            translationSiga.textContent = 'Theo dõi hướng dẫn video dưới đây';
            translationChat.textContent = 'Nhấn vào đây để vào trò chuyện lệnh';
            translationReceber.textContent = 'Nhận script';
            translationDigite.textContent = 'Nhập /script trong trò chuyện lệnh giống như hướng dẫn ở trên';
            translationResetar.textContent = 'Đặt lại HWID';
            translationResetarDescricao.textContent = 'Nhập /resethwid trong trò chuyện lệnh giống như hướng dẫn ở trên';
            translationCliqueAquiTexto.textContent = 'Discord Server (Nhấn vào đây)';
        } else if (selectedLanguage === 'th') {
            translationPt.textContent = 'รับคีย์ Luxury Hub';
            translationSiga.textContent = 'ติดตามคำแนะนำในวิดีโอด้านล่าง';
            translationChat.textContent = 'คลิกที่นี่เพื่อไปยังแชทคำสั่ง';
            translationReceber.textContent = 'รับสคริปต์';
            translationDigite.textContent = 'พิมพ์ /script ในแชทคำสั่งเช่นเดียวกับที่แสดงในวิดีโอด้านบน';
            translationResetar.textContent = 'รีเซ็ต HWID';
            translationResetarDescricao.textContent = 'พิมพ์ /resethwid ในแชทคำสั่งเช่นเดียวกับที่แสดงในวิดีโอด้านบน';
            translationCliqueAquiTexto.textContent = 'Discord Server (คลิกที่นี่)';
        }
    });
});
