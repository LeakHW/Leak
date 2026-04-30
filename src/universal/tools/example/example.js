/////////////////////////////////////////////
// THIS CODE IS PART OF THE LEAKHW PROJECT //
//    © LeakHW 2026 - GNU GPLv3 License    //
//                                         //
// Please do NOT claim this code as solely //
// your own code. All code here is part of //
//     the open-source LeakHW project.     //
//                                         //
//    math_helper.js • Math Helper         //
//        Specialized Math Tools           //
/////////////////////////////////////////////

(function() {
    /**
     * MATH HELPER TOOL
     * Provides specialized UI for math-related platforms.
     */
    
    if (window.Leak) {
        window.Leak.registerTool('example', async (isEnabled) => {
            let helper = document.getElementById('leak-example-tool');
            
            if (isEnabled) {
                if (!helper) {
                    try {
                        const response = await fetch(chrome.runtime.getURL('universal/tools/example/example.html'));
                        const html = await response.text();
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = html;
                        helper = tempDiv.firstElementChild;
                        helper.id = 'leak-example-tool';
                        document.body.appendChild(helper);
                    } catch (error) {
                        window.Leak.error('Failed to load example HTML', error);
                        return;
                    }
                } else {
                    helper.style.display = 'block';
                }
            } else {
                if (helper) helper.style.display = 'none';
            }
        });
    }
})();