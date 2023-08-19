// SELECTORS
const pass_length = document.querySelector(".len");
const uppercase = document.querySelector(".upp");
const lowercase = document.querySelector(".low");
const numb = document.querySelector(".num");
const special = document.querySelector(".spe");
const generate = document.querySelector(".generate");
const code = document.querySelector(".code");

// character sets
const upper_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_set = "abcdefghijklmnopqustuvwxyz";
const number_set = "1234567890";
const special_set = "!@#$%^&()*+_-?/><";

// function to generate random character

const generate_char = (word_set) => {
  return word_set[Math.floor(Math.random() * word_set.length)];
};

// genertae on the basis of selection

const create_pass = (ans = "") => {
  if (uppercase.checked) {
    ans = ans + generate_char(upper_set);
  }
  if (lowercase.checked) {
    ans = ans + generate_char(lower_set);
  }
  if (numb.checked) {
    ans = ans + generate_char(number_set);
  }
  if (special.checked) {
    ans = ans + generate_char(special_set);
  }
  if (
    !special.checked &&
    !numb.checked &&
    !lowercase.checked &&
    !uppercase.checked
  ) {
    code.textContent = `⚠️ select type of password by clicking checkbox`;
    return;
  }
  if (ans.length < Number(pass_length.value)) {
    return create_pass(ans);
  }
  if (ans.length >= Number(pass_length.value)) {
    return ans;
  }
};

// event listner to throw answer when button is clicked:
generate.addEventListener("click", function () {
  const ans = create_pass();
  if (Number(pass_length.value) > 15 || Number(pass_length.value) < 8) {
    code.textContent = `⚠️ password length should be 8-14 word length`;
    return;
  }
  if (
    !special.checked &&
    !numb.checked &&
    !lowercase.checked &&
    !uppercase.checked
  ) {
    code.textContent = `⚠️ select type of password by clicking checkbox`;
    return;
  }

  code.textContent = `Password generated: ${ans.substring(
    0,
    Number(pass_length.value)
  )}`;
  //console.log(ans.substring(0, Number(pass_length.value)));
});
