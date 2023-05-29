const puppeteer = require("puppeteer");
const Tesseract = require("tesseract.js");
const fs = require("fs");
const readline = require("readline");
const { exec } = require("child_process");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa tu RUC: ", (ruc) => {
  function getId(ruc) {
    (async () => {
      const browser = await puppeteer.launch({ headless: false }); // Lanzar el navegador con la opción headless en false para ver la acción

      const page2 = await browser.newPage();
      const page = await browser.newPage();
      const timeout = 5000;
      await page.goto(
        "https://oam.entel.pe/oam/server/osso_login?Site2pstoreToken=v3.0~000B4ADECEEA538FF6~0FDD10B6250B6A7628646FF84AA2A72D~CD33EC4E7633D4C6528FF50C565971D6EBA244312EF4C0B18F4D57D22577C6BE4E707FD921C56D3857C2D8DB405984EC7AC4B3C774FDCF613DF187E02491A5F550FDCBDCEA60BE7DFB818BEA8E686C6F2AFB6A54F443E5CC50A8D20B5176F73F9AC54936344893904D0AA4482811D6C778A2C495D0C895E871CBE75BFBF03722065E9A0A5381FEBD3EE5ADFE646A6A1367112E2CEB565F239EC2E069E04DF21237AF72B9F2B7C9A4E4C93E49D2422829B8968104833625A2E4C44E2E0EA2B35A7D3A9733ED1DA3875A992DF0D97BA0077C1651C051EEEFDCE3F74F34BC54B86E1E009434EFAA80B40266922735D0E6DC99F46B796E305A710D56571A4F7522F2C26BFB4C1B968AF22D10523C3EB9EEDC9BE3A73500A5AB3362ED1E862120FEC2158F8575698C63B9E0086A6C4E1B5C84C9AE1669F14F9B0D4EC5E62D65D6D6F9"
      ); // Cargar la página de Google

      await page.type('input[name="username"]', "942823608");
      await page.type('input[name="password"]', "190723");
      await page.waitForTimeout(2000);
      await page.click('input[type="submit"]');

      //
      await page.type('input[name="username"]', "942823608");
      await page.type('input[name="password"]', "190723");
      await page.waitForTimeout(2000);
      await page.click('input[type="submit"]');

      await page.waitForNavigation();

      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await scrollIntoViewIfNeeded(
          [
            ["#tlbMenu > tbody > tr:nth-child(3) > td:nth-child(2)"],
            ['xpath///*[@id="tlbMenu"]/tbody/tr[3]/td[2]'],
            ["aria/Órdenes"],
            ["text/Órdenes"],
          ],
          frame,
          timeout
        );
        const element = await waitForSelectors(
          [
            ["#tlbMenu > tbody > tr:nth-child(3) > td:nth-child(2)"],
            ['xpath///*[@id="tlbMenu"]/tbody/tr[3]/td[2]'],
            ["aria/Órdenes"],
            ["text/Órdenes"],
          ],
          frame,
          { timeout, visible: true }
        );
        await element.click({
          offset: {
            x: 24.03125,
            y: 5,
          },
        });
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        const promises = [];
        promises.push(frame.waitForNavigation());
        await scrollIntoViewIfNeeded(
          [
            ["#divMenu-2 > table > tbody > tr:nth-child(1) > td:nth-child(1)"],
            ['xpath///*[@id="divMenu-2"]/table/tbody/tr[1]/td[1]'],
          ],
          frame,
          timeout
        );
        const element = await waitForSelectors(
          [
            ["#divMenu-2 > table > tbody > tr:nth-child(1) > td:nth-child(1)"],
            ['xpath///*[@id="divMenu-2"]/table/tbody/tr[1]/td[1]'],
          ],
          frame,
          { timeout, visible: true }
        );
        await element.click({
          offset: {
            x: 6,
            y: 4,
          },
        });
        await Promise.all(promises);
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await scrollIntoViewIfNeeded(
          [["#txtRuc"], ['xpath///*[@id="txtRuc"]']],
          frame,
          timeout
        );
        const element = await waitForSelectors(
          [["#txtRuc"], ['xpath///*[@id="txtRuc"]']],
          frame,
          { timeout, visible: true }
        );
        await element.click({
          offset: {
            x: 58.40625,
            y: 14,
          },
        });
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await scrollIntoViewIfNeeded(
          [["#txtRuc"], ['xpath///*[@id="txtRuc"]']],
          frame,
          timeout
        );
        const element = await waitForSelectors(
          [["#txtRuc"], ['xpath///*[@id="txtRuc"]']],
          frame,
          { timeout, visible: true }
        );
        const inputType = await element.evaluate((el) => el.type);
        if (inputType === "select-one") {
          await changeSelectElement(element, ruc);
        } else if (
          [
            "textarea",
            "text",
            "url",
            "tel",
            "search",
            "password",
            "number",
            "email",
          ].includes(inputType)
        ) {
          await typeIntoElement(element, ruc);
        } else {
          await changeElementValue(element, ruc);
        }
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await targetPage.keyboard.down("Enter");
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        await targetPage.keyboard.up("Enter");
        await page.waitForTimeout(1000);
      }
      {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[0];
        const promises = [];
        promises.push(frame.waitForNavigation());
        await scrollIntoViewIfNeeded(
          [
            [
              "#pcnt34_52890_34_52885_52885 > form > table > tbody > tr > td > table:nth-child(28) > tbody > tr > td > input[type=button]",
            ],
            [
              'xpath///*[@id="pcnt34_52890_34_52885_52885"]/form/table/tbody/tr/td/table[6]/tbody/tr/td/input',
            ],
            ['aria/Buscar[role="button"]'],
          ],
          frame,
          timeout
        );
        const element = await waitForSelectors(
          [
            [
              "#pcnt34_52890_34_52885_52885 > form > table > tbody > tr > td > table:nth-child(28) > tbody > tr > td > input[type=button]",
            ],
            [
              'xpath///*[@id="pcnt34_52890_34_52885_52885"]/form/table/tbody/tr/td/table[6]/tbody/tr/td/input',
            ],
            ['aria/Buscar[role="button"]'],
          ],
          frame,
          { timeout, visible: true }
        );
        await element.click({
          offset: {
            x: 38,
            y: 4,
          },
        });
        await Promise.all(promises);
        // Hacer clic derecho en la página
        await page.mouse.click(380, 130, { button: "right" });
        await page.mouse.click(380, 130, { button: "Left" });

        // Esperar un breve período de tiempo para asegurarse de que aparezca el menú contextual
        await page.waitForTimeout(2500);

        // Hacer clic en "Inspeccionar" en el menú contextual
        await page.keyboard.press("ArrowUp");
        await page.waitForTimeout(2500);
        await page.keyboard.press("Enter");

        // Esperar a que se abra la herramienta de inspección
        await page.waitForSelector("body");
        await page.waitForTimeout(2500);
        // Obtener el contenido HTML de la herramienta de inspección
        const hiddenHtml = await page.$eval(
          "body",
          (element) => element.innerHTML
        );
        console.log(hiddenHtml);

        await page2.goto(
          "http://plus.entel.pe/portal/page/portal/nextel/CUST_DETAIL/Tab13?customerId=" +
            12345
        );
      }

      //await browser.close(); // Cerrar el navegador cuando termine

      async function waitForSelectors(selectors, frame, options) {
        for (const selector of selectors) {
          try {
            return await waitForSelector(selector, frame, options);
          } catch (err) {
            console.error(err);
          }
        }
        throw new Error(
          "Could not find element for selectors: " + JSON.stringify(selectors)
        );
      }

      async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
        const element = await waitForSelectors(selectors, frame, {
          visible: false,
          timeout,
        });
        if (!element) {
          throw new Error("The element could not be found.");
        }
        await waitForConnected(element, timeout);
        const isInViewport = await element.isIntersectingViewport({
          threshold: 0,
        });
        if (isInViewport) {
          return;
        }
        await element.evaluate((element) => {
          element.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "auto",
          });
        });
        await waitForInViewport(element, timeout);
      }

      async function waitForConnected(element, timeout) {
        await waitForFunction(async () => {
          return await element.getProperty("isConnected");
        }, timeout);
      }

      async function waitForInViewport(element, timeout) {
        await waitForFunction(async () => {
          return await element.isIntersectingViewport({ threshold: 0 });
        }, timeout);
      }

      async function waitForSelector(selector, frame, options) {
        if (!Array.isArray(selector)) {
          selector = [selector];
        }
        if (!selector.length) {
          throw new Error("Empty selector provided to waitForSelector");
        }
        let element = null;
        for (let i = 0; i < selector.length; i++) {
          const part = selector[i];
          if (element) {
            element = await element.waitForSelector(part, options);
          } else {
            element = await frame.waitForSelector(part, options);
          }
          if (!element) {
            throw new Error("Could not find element: " + selector.join(">>"));
          }
          if (i < selector.length - 1) {
            element = (
              await element.evaluateHandle((el) =>
                el.shadowRoot ? el.shadowRoot : el
              )
            ).asElement();
          }
        }
        if (!element) {
          throw new Error("Could not find element: " + selector.join("|"));
        }
        return element;
      }

      async function waitForElement(step, frame, timeout) {
        const {
          count = 1,
          operator = ">=",
          visible = true,
          properties,
          attributes,
        } = step;
        const compFn = {
          "==": (a, b) => a === b,
          ">=": (a, b) => a >= b,
          "<=": (a, b) => a <= b,
        }[operator];
        await waitForFunction(async () => {
          const elements = await querySelectorsAll(step.selectors, frame);
          let result = compFn(elements.length, count);
          const elementsHandle = await frame.evaluateHandle((...elements) => {
            return elements;
          }, ...elements);
          await Promise.all(elements.map((element) => element.dispose()));
          if (result && (properties || attributes)) {
            result = await elementsHandle.evaluate(
              (elements, properties, attributes) => {
                for (const element of elements) {
                  if (attributes) {
                    for (const [name, value] of Object.entries(attributes)) {
                      if (element.getAttribute(name) !== value) {
                        return false;
                      }
                    }
                  }
                  if (properties) {
                    if (!isDeepMatch(properties, element)) {
                      return false;
                    }
                  }
                }
                return true;

                function isDeepMatch(a, b) {
                  if (a === b) {
                    return true;
                  }
                  if ((a && !b) || (!a && b)) {
                    return false;
                  }
                  if (!(a instanceof Object) || !(b instanceof Object)) {
                    return false;
                  }
                  for (const [key, value] of Object.entries(a)) {
                    if (!isDeepMatch(value, b[key])) {
                      return false;
                    }
                  }
                  return true;
                }
              },
              properties,
              attributes
            );
          }
          await elementsHandle.dispose();
          return result === visible;
        }, timeout);
      }

      async function querySelectorsAll(selectors, frame) {
        for (const selector of selectors) {
          const result = await querySelectorAll(selector, frame);
          if (result.length) {
            return result;
          }
        }
        return [];
      }

      async function querySelectorAll(selector, frame) {
        if (!Array.isArray(selector)) {
          selector = [selector];
        }
        if (!selector.length) {
          throw new Error("Empty selector provided to querySelectorAll");
        }
        let elements = [];
        for (let i = 0; i < selector.length; i++) {
          const part = selector[i];
          if (i === 0) {
            elements = await frame.$$(part);
          } else {
            const tmpElements = elements;
            elements = [];
            for (const el of tmpElements) {
              elements.push(...(await el.$$(part)));
            }
          }
          if (elements.length === 0) {
            return [];
          }
          if (i < selector.length - 1) {
            const tmpElements = [];
            for (const el of elements) {
              const newEl = (
                await el.evaluateHandle((el) =>
                  el.shadowRoot ? el.shadowRoot : el
                )
              ).asElement();
              if (newEl) {
                tmpElements.push(newEl);
              }
            }
            elements = tmpElements;
          }
        }
        return elements;
      }

      async function waitForFunction(fn, timeout) {
        let isActive = true;
        const timeoutId = setTimeout(() => {
          isActive = false;
        }, timeout);
        while (isActive) {
          const result = await fn();
          if (result) {
            clearTimeout(timeoutId);
            return;
          }
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw new Error("Timed out");
      }

      async function changeSelectElement(element, value) {
        await element.select(value);
        await element.evaluateHandle((e) => {
          e.blur();
          e.focus();
        });
      }

      async function changeElementValue(element, value) {
        await element.focus();
        await element.evaluate((input, value) => {
          input.value = value;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }, value);
      }

      async function typeIntoElement(element, value) {
        const textToType = await element.evaluate((input, newValue) => {
          if (
            newValue.length <= input.value.length ||
            !newValue.startsWith(input.value)
          ) {
            input.value = "";
            return newValue;
          }
          const originalValue = input.value;
          input.value = "";
          input.value = originalValue;
          return newValue.substring(originalValue.length);
        }, value);
        await element.type(textToType);
      }
    })();
  }

  getId(ruc);
});
