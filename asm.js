/// <reference types="../CTAutocomplete/asm" />
/// <reference lib="es2015" />
/**@param {IASM} ASM */
export default (ASM) => {
  const { desc, L, STRING, JumpCondition } = ASM;

  ASM.injectBuilder(
    "net/minecraft/client/renderer/ItemRenderer",
    "renderFireInFirstPerson",
    desc("V", "F"),
    ASM.At(ASM.At.HEAD)
  )
    .methodMaps({
      func_78442_d: "renderFireInFirstPerson"
    })
    .instructions(($) => {
      $.invokeStatic(
        "com/chattriggers/ctjs/minecraft/libs/FileLib",
        "read",
        desc(L(STRING), L(STRING), L(STRING)),
        ($) => {
          $.ldc("ToggleFire");
          $.ldc("toggle.txt");
        }
      );

      $.invokeStatic("java/lang/Boolean", "parseBoolean", desc("Z", L(STRING)));

      $.ifClause([JumpCondition.TRUE], ($) => {
        $.methodReturn();
      });
    })
    .execute();
};
